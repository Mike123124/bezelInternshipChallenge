/* eslint-disable prettier/prettier */
import axios from 'axios';
import Modal from 'components/Modal/WatchModal';
import PlainLayout from 'layouts/PlainLayout';
import { useEffect, useState } from 'react';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123'
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <PlainLayout>
      <main className="  flex w-full max-w-[1000px] items-center justify-center bg-[#333232] px-20 text-center ">
        {data && <Modal data={data} />}
      </main>
    </PlainLayout>
  );
}

export default Home;
