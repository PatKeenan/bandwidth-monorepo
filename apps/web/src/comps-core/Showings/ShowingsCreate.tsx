import React from 'react';
import {Title} from '@comps-features';
import {
  AutoComplete,
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Select,
  Space,
} from 'antd';

import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';

export const ShowingsCreate = () => {
  const [value, setValue] = React.useState('');
  const [suggestions, setSuggestions] = React.useState<any>([]);

  const handleChange = async (event) => {
    setValue(event);
    try {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event}.json?access_token=pk.eyJ1IjoicGF0a2VlbmFuIiwiYSI6ImNsMGZ4ZmNldDB4YzQzZHF0ZTd3dHBwNHEifQ.78tRNwtM7Sg58BBXuZOAMQ&autocomplete=true`;
      const response = await fetch(endpoint);
      const results = await response.json();
      let arrss: {value: string; cords: number[]}[] = [];
      results.features.forEach((i) =>
        arrss.push({value: i.place_name, cords: i.geometry.coordinates}),
      );
      setSuggestions(arrss);
    } catch (error) {
      console.log('Error fetching data, ', error);
    }
  };
  const [markers, setMarkers] = React.useState([]);
  const handleSelect = (val, option) => {
    setMarkers((prev) => [...prev, option]);
  };
  return (
    <form
      name="showing"
      className="flex h-full max-h-full flex-1 flex-col overflow-hidden"
    >
      <div className="flex flex-grow overflow-auto">
        <div
          className={`grid h-full w-full grid-cols-1  pt-2 md:grid-cols-2 md:gap-2`}
        >
          <div className="order-3 flex max-h-full flex-1 flex-grow flex-col justify-between overflow-hidden  md:order-2">
            <div className="m-0 flex  flex-row space-x-2 pb-2">
              <Form.Item
                name="title"
                label="Title"
                required
                style={{marginBottom: 0}}
              >
                <Input placeholder="Cool name here" />
              </Form.Item>
              <Form.Item
                name="date"
                label="Date"
                required
                style={{marginBottom: 0}}
              >
                <DatePicker
                  onChange={() => {}}
                  picker="date"
                  format={'MM/DD/YYYY'}
                />
              </Form.Item>
            </div>
            <div className="flex flex-grow flex-col overflow-auto rounded-md bg-gray-200 p-3 shadow-md">
              <Card
                title="Stop #1"
                actions={[
                  <div className="mr-6 flex justify-end space-x-2">
                    <Button type="ghost">Cancel</Button>
                    <Button type="primary">Add</Button>
                  </div>,
                ]}
              >
                <Form.Item name="address" label="Address">
                  <AutoComplete
                    value={value}
                    options={suggestions}
                    placeholder="Enter Address"
                    onChange={handleChange}
                    onSelect={handleSelect}
                  />
                </Form.Item>
                <Form.Item name="clients" label="Clients">
                  <Select
                    showSearch
                    mode="multiple"
                    allowClear
                    style={{width: '100%'}}
                    placeholder="Select Clients"
                    onChange={() => {}}
                    maxTagCount="responsive"
                  >
                    <Select.Option key={'tico'}>Tico</Select.Option>
                    <Select.Option key={'morgan'}>Morgan</Select.Option>
                    <Select.Option key={'stanley'}>Stanley</Select.Option>
                  </Select>
                </Form.Item>
              </Card>
            </div>
            <div className="flex  justify-between pt-2">
              <Button type="ghost">Cancel</Button>
              <Button type="primary">Save Showings</Button>
            </div>
          </div>
          <div className="order-2  md:order-3">
            <MapContainer
              center={[40.220379, -74.01181]}
              zoom={13}
              className="w-full rounded-md"
              style={{height: '100%'}}
            >
              <TileLayer
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
                url="https://api.mapbox.com/styles/v1/patkeenan/cl0fxh6cx000i14ms6tavz1nq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGF0a2VlbmFuIiwiYSI6ImNsMGZ4ZmNldDB4YzQzZHF0ZTd3dHBwNHEifQ.78tRNwtM7Sg58BBXuZOAMQ"
              />
              {markers.map((i, index) => {
                return (
                  <Marker position={[i.cords[1], i.cords[0]]} key={index}>
                    <Popup>{i.value}</Popup>
                  </Marker>
                );
              })}

              {/* <Marker position={[50.505, -0.02]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker> */}
            </MapContainer>
          </div>
        </div>
      </div>
    </form>
  );
};
