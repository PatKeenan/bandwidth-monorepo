import { ContentContainer } from '@comps-features';
import { Calendar as AntdCalendar, Drawer } from 'antd';
import { CalendarMode } from 'antd/lib/calendar/generateCalendar';
import React from 'react';

export const Calendar = () => {
    const [drawer, setDrawer] = React.useState(false);
    const onPanelChange = (value: moment.Moment, mode: CalendarMode) => {
        console.log(value, mode);
    };
    return (
        <ContentContainer overflow="auto" className="pr-4">
            <Drawer title="Basic Drawer" placement="right" visible={drawer}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            <AntdCalendar onPanelChange={onPanelChange} onSelect={() => setDrawer(!drawer)} mode="month" />
        </ContentContainer>
    );
};
