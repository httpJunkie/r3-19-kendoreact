import React from "react";
import { displayDate, sampleData } from './data/events-utc';
import { Scheduler, TimelineView, DayView, MonthView } from '@progress/kendo-react-scheduler';
import { guid } from '@progress/kendo-react-common';
import "./SchedulerWrap.scss";

document.title = `KendoReact Scheduler ~ Telerik R3 2019 Demo`;

const SchedulerWrap = () => {
  const [data, setData] = React.useState(sampleData);
  const editableDefaults = { add: true, remove: true, drag: true, resize: true, edit: true };

  const handleDataChange = ({ created, updated, deleted }) => {
    setData(old => old
      // Filter the deleted items
      .filter(item => deleted.find(current => current.id === item.id) === undefined)
      // Find and replace the updated items
      .map(item => updated.find(current => current.id === item.id) || item)
      // Add the newly created items and assign an `id`.
      .concat(created.map(item => Object.assign({}, item, { id: guid() })))
    );
  };

  return (
    <Scheduler onDataChange={handleDataChange} data={data} defaultDate={displayDate} editable={editableDefaults}>
      <TimelineView />
      <DayView numberOfDays={2} />
      <MonthView />
    </Scheduler>
  );
};

export default SchedulerWrap;
