import MeetupList from "../components/meetups/MeetupList"

const Dummy_Meetups = [
    {
        id : "m1",
        title : "A First Meetup",
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/160322-066_View_from_Thiri.jpg/1280px-160322-066_View_from_Thiri.jpg",
        address : '5, somecity in india',
        description : "This is first meetup"
    },
    {
        id : "m2",
        title : "A Second Meetup",
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/160322-066_View_from_Thiri.jpg/1280px-160322-066_View_from_Thiri.jpg",
        address : '5, Bangalore',
        description : "This is second meetup"
    },
]

const HomePage  =(props)=>{

    return <MeetupList meetups={props.meetups} />
}

export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;
    return {
        props : {
            meetups : Dummy_Meetups
        }
    };
}

// export async function getStaticProps() {
//     return {
//         props : {
//             meetups : Dummy_Meetups
//         },
//         revalidate : 1
//     };
// }

export default HomePage;