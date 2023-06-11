// import dependencies
import { Schema, model } from 'mongoose';

// define handler
const TodoSchema = new Schema( {
    id: {
       type: String 
    },

    title: {
        type: String,
        required: true
    },

    completed: {
        type: Boolean,
        default: false
    }
});

const Todo = model("Todo", TodoSchema);

// export handler
export default Todo;