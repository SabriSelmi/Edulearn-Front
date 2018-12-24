
import * as React from 'react';
import {
    ScheduleComponent, ViewsDirective, ViewDirective, TimelineViews, Inject, ResourcesDirective,
    ResourceDirective, Resize, DragAndDrop
} from '@syncfusion/ej2-react-schedule';
import './timeline-resources.css';
import { extend, Internationalization, isNullOrUndefined } from '@syncfusion/ej2-base';
import SampleBase from './sample-base';
import * as dataSource from './datasource.json';
import axios from "axios";

/**
 * schedule room scheduler sample
 */

export default class TimelineResource extends SampleBase {
    constructor() {
        super(...arguments);

        this.data = extend([], dataSource.roomData, null, true);
        this.instance = new Internationalization();
        this.ownerData = [
            { text: 'Classroom 1', id: 1, color: '#ea7a57', capacity: 20, Professor: 'Mr.Smith' },
            { text: 'Classroom 2', id: 2, color: '#7fa900', capacity: 7, Professor: 'Ms.Hanna' },
            { text: 'Classroom 3', id: 3, color: '#5978ee', capacity: 5, Professor: 'Ms.Claudia' },
            { text: 'Classroom 4', id: 4, color: '#fec200', capacity: 15, Professor: 'Mr.Sabri' },
            { text: 'Classroom 5', id: 5, color: '#df5286', capacity: 25, Professor: 'Mr.Ralf' },
            { text: 'Classroom 6', id: 6, color: '#00bdae', capacity: 10, Professor: 'Mr.Kellen' },
            { text: 'Classroom 7', id: 7, color: '#865fcf', capacity: 20, Professor: 'Ms.Dauria' },
            { text: 'Classroom 8', id: 8, color: '#1aaa55', capacity: 8, Professor: 'Mr.Benny' },
            { text: 'Classroom 9', id: 9, color: '#df5286', capacity: 30, Professor: 'Ms.Alexa' },
            { text: 'Classroom 10', id: 10, color: '#710193', capacity: 25, Professor: 'Mr.Jon' }
        ];
    }

    getRoomName(value) {
        return value.resourceData[value.resource.textField];
    }
    getRoomType(value) {
        return value.resourceData.Professor;
    }
    getRoomCapacity(value) {
        return value.resourceData.capacity;
    }
    isReadOnly(endDate) {
        return (endDate < new Date(2018, 6, 31, 0, 0));
    }
    resourceHeaderTemplate(props) {
        return (<div className="template-wrap">
            <div className="room-name">{this.getRoomName(props)}</div>
            <div className="room-type">{this.getRoomType(props)}</div>
            <div className="room-capacity">{this.getRoomCapacity(props)}</div>
        </div>);
    }
    onActionBegin(args) {
        if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
            let data;
            if (args.requestType === 'eventCreate') {
                data = args.data[0];
                axios.post("/calendar", {...data})

            }
            else if (args.requestType === 'eventChange') {
                data = args.data;

                axios.put(`/calendar/${data._id}`,{
			Id: data.Id,
            Subject: data.Subject,
            Description: data.Description,
            StartTime: data.StartTime,
            EndTime: data.EndTime,
            RoomId:data.RoomId,
	        IsAllDay:data.IsAllDay,
            Location:data.Location,
            Comments:data.Comments,
            IsTimeZone:data.IsTimeZone,
            Repeat:data.Repeat,
})

            }

            let groupIndex = this.scheduleObj.eventBase.getGroupIndexFromEvent(data);

            if (!this.scheduleObj.isSlotAvailable(data.StartTime, data.EndTime, groupIndex)) {
                args.cancel = true;

            }
        }
    }
    onEventRendered(args) {
        let data = args.data;

        if (this.isReadOnly(data.EndTime)) {
            args.element.setAttribute('aria-readonly', 'true');
            args.element.classList.add('e-read-only');
        }
    }
    onRenderCell(args) {
        if (args.element.classList.contains('e-work-cells')) {
            let x=new Date();


            if (args.date < new Date(x.getFullYear(),x.getMonth(),x.getDate(),0,0)) {
                args.element.setAttribute('aria-readonly', 'true');
                args.element.classList.add('e-read-only-cells');
            }
        }
        if (args.elementType === 'emptyCells' && args.element.classList.contains('e-resource-left-td')) {
            let target = args.element.querySelector('.e-resource-text');
            target.innerHTML = '<div class="name">Rooms</div><div class="type">Professor</div><div class="capacity">Capacity</div>';
        }
    }
    onPopupOpen(args) {
        let data = args.data;

        if (args.type === 'QuickInfo' || args.type === 'Editor' || args.type === 'RecurrenceAlert' || args.type === 'DeleteAlert') {
            let target = (args.type === 'RecurrenceAlert' ||
                args.type === 'DeleteAlert') ? data.element[0] : args.target;
            if(args.type==='DeleteAlert'){

                axios.delete(`/calendar/${data.event._id}`);
            }

            if (!isNullOrUndefined(target) && target.classList.contains('e-work-cells')) {

                if ((target.classList.contains('e-read-only-cells')) ||
                    (!this.scheduleObj.isSlotAvailable(data.startTime, data.endTime, data.groupIndex))) {
                    args.cancel = true;

                }
            }
            else if (!isNullOrUndefined(target) && target.classList.contains('e-appointment') &&
                (this.isReadOnly(data.EndTime))) {
                args.cancel = true;

            }
        }
    }
    render() {

        return (<div className='schedule-control-section col-lg-9 col-md-9 col-sm-9 m-3'>
            <div className='col-lg-12 control-section'>
                <div className='control-wrapper'>
                    <ScheduleComponent cssClass='timeline-resource' ref={schedule => this.scheduleObj = schedule} width='100%' height='650px' selectedDate={new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate())} workHours={{ start: '08:00', end: '18:00' }}  timeScale={{ interval: 60, slotCount: 1 }} resourceHeaderTemplate={this.resourceHeaderTemplate.bind(this)} eventSettings={{
                        dataSource: this.props.roomData,
                        fields: {
                            id: 'Id',
                            subject: { title: 'Summary', name: 'Subject' },
                            location: { title: 'Location', name: 'Location' },
                            description: { title: 'Comments', name: 'Description' },
                            startTime: { title: 'From', name: 'StartTime' },
                            endTime: { title: 'To', name: 'EndTime' }
                        }
                    }} eventRendered={this.onEventRendered.bind(this)} popupOpen={this.onPopupOpen.bind(this)} actionBegin={this.onActionBegin.bind(this)} renderCell={this.onRenderCell.bind(this)} group={{ enableCompactView: false, resources: ['MeetingRoom'] }}>
                        <ResourcesDirective>
                            <ResourceDirective field='RoomId' title='Room Type' name='MeetingRoom' allowMultiple={true} dataSource={this.ownerData} textField='text' idField='id' colorField='color'>
                            </ResourceDirective>
                        </ResourcesDirective>
                        <ViewsDirective>
                            <ViewDirective option='TimelineDay'/>
                            <ViewDirective option='TimelineWeek'/>
                        </ViewsDirective>
                        <Inject services={[TimelineViews, Resize, DragAndDrop]}/>
                    </ScheduleComponent>
                </div>
            </div>

        </div>);
    }
}