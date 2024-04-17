import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupDetailPage = (props) => {
  return (
    <MeetupDetails
      id={props.meetupData.id}
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://abdul:AEhDN85438zD7XGG@cluster0.cr8xth8.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://abdul:AEhDN85438zD7XGG@cluster0.cr8xth8.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeeetup = await meetupsCollection.findOne({
    _id:new ObjectId(meetupId),
  });
  client.close();

//   console.log(selectedMeeetup);

  return {
    props: {
      meetupData: {
        id: selectedMeeetup._id.toString(),
        title: selectedMeeetup.title,
        address: selectedMeeetup.address,
        image: selectedMeeetup.image,
        description: selectedMeeetup.description,
      },
    },
  };
}

export default MeetupDetailPage;
