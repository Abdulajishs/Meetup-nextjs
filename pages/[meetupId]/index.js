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

export async function getStaticPaths () {
    return {
        fallback : false,
        paths: [
            {
                params : {
                    meetupId : "m1"
                },
            },
            {
                params : {
                    meetupId : "m2"
                },
            },
            {
                params : {
                    meetupId : "m3"
                },
            },
        ]
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    console.log(meetupId);
    return {
        props : {
            meetupData : {
                image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/160322-066_View_from_Thiri.jpg/1280px-160322-066_View_from_Thiri.jpg",
                id : meetupId,
                title:"First Meetup",
                address : "some street at some city",
                description : "This is a first Meetup"
            }
        }
    };
}

export default MeetupDetailPage;