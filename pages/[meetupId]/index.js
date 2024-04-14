import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupDetailPage = ({params}) =>{
    return (
        <MeetupDetails 
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/160322-066_View_from_Thiri.jpg/1280px-160322-066_View_from_Thiri.jpg"
        title="First Meetup"
        address = "some street at some city"
        description = "This is a first Meetup"
        />
    )
}

export default MeetupDetailPage;