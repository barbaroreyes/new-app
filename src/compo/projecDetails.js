import {useParams} from 'react-router-dom';

const ProjecDetails = () => {
    const {id} = useParams()
  return (
    <div>
      ProjecDetails
      {id}
    </div>
  );
}

export default ProjecDetails;
