// =======================================
//              DEPENDENCIES
// =======================================
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors')
// =======================================
//              DATABASE
// =======================================
// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
// =======================================
//              MODELS
// =======================================
// /* Models moved to controller */
const EventModel = require('./models/events')
// =======================================
//              MIDDLEWARE
// =======================================
// Body parser middleware: give us access to req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride("_method"));
app.use(
    cors({
        origin: "*"
    })
)
// =======================================
//              ROUTES
// =======================================
const controller1 = require("./controllers/controller1.js");
app.use("/index" , controller1);



//Get Request
app.get("/getEvents", cors(), (req, res) => {

    EventModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})


//Post Request
app.post("/createEvent", cors(), async (req, res) => {
    const event = req.body
    const newEvent = new EventModel(event)
    await newEvent.save()

    res.json(event)
})

//#region Update Requests
app.put("/updateEventName", cors(), async (req, res) => {
    const newEventName = req.body.newEventName;
    const id = req.body.id;
    try {
        await EventModel.findById(id, (error, eventToUpdate) => {
            eventToUpdate.eventName = newEventName;
            eventToUpdate.save();
        });
    } catch(err) {
        console.log(err);
    }
    res.send("Updated");
})


app.put("/updateparticipants", cors(), async (req, res) => {
    const newParticipants = req.body.newParticipants;
    const id = req.body.id;
    try {
        await EventModel.findById(id, (error, eventToUpdate) => {
            eventToUpdate.participants = newParticipants;
            eventToUpdate.save();
        });
    } catch(err) {
        console.log(err);
    }
    res.send("Updated");
})

app.put("/updatedescription", cors(), async (req, res) => {
    const newDescription = req.body.newDescription;
    const id = req.body.id;
    try {
        await EventModel.findById(id, (error, eventToUpdate) => {
            eventToUpdate.description = newDescription;
            eventToUpdate.save();
        });
    } catch(err) {
        console.log(err);
    }
    res.send("Updated");
})

//#endregion

app.delete('/deleteEvent/:id', cors(), async (req, res) => {
    const id = req.params.id
    await EventModel.findByIdAndRemove(id).exec();
    res.send("Event Deleted")
})
// INDEX (get)


// NEW (get)


// DESTROY (delete)


// UPDATE (put)


// CREATE (post)


// EDIT (get) (put)


// SHOW (get)


// =======================================
//              LISTENER
// =======================================
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));