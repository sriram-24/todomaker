import {ObjectId} from 'bson'
class Todo{
    constructor({
        title,
        body,
        status,
        owner_id,
        id = new ObjectId(),
        createdAt,
        DueAt,
        priority
    }){
        this._partition = partition;
        this._id = id;
        this.title = title;
        this.status = status;
        this.body = body; 
        this.owner_id =owner_id,
        this.createdAt = createdAt,
        this.DueAt = DueAt,
        this.priority = priority
    }

    static STATUS_COMPLETED = 'Completed';
    static STATUS_PENDING = 'Pending';
    static STATUS_CANCELLED = 'Cancelled';
    static STATUS_ONGOING = 'Ongoing';

    static HIGH_PRIORITY = 'High';
    static MEDIUM_PRIORITY = 'Medium';
    static LOW_PRIORITY = 'Low';


    static schema = {
        name:'Todo',
        properties:{
            _id:'objectId',
            _partition : 'string',
            title:'string',
            body:'string',
            status:'string',
            owner_id:'string',
            createdAt:'date',
            DueAt : 'date',
            priority:'string'
        },
        primaryKey:'_id'
    }

}

export {Todo} ;