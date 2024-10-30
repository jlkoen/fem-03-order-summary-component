import HeroImage from '../images/illustration-hero.svg';
import MusicIcon from '../images/icon-music.svg';

const OrderSummary = () => {
  return (
    <div className='bg-white rounded-t-3xl rounded-b-3xl flex flex-col justify-center items-center max-w-sm'>
      <img src={HeroImage} alt='hero' className='rounded-t-3xl' />
      <div className='text-xl font-extrabold mt-8 mb-3 text-center font-red-hat-display'>
        <h1>Order Summary</h1>
      </div>
      <div className='p-3 text-center items-center mb-2'>
        <p className='font-red-hat-display text-gray-400 mb-4'>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className='justify-center flex py-3'>
          <div className='bg-very-pale-blue px-3 py-3 rounded-xl space-x-8 flex mb-5'>
            <img src={MusicIcon} alt='music icon' className='px-2' />
            <div className='text-left text-sm font-red-hat-display'>
              <p className='font-bold'>Annual Plan</p>
              <p className='text-gray-400 pr-5'>$59.99/year</p>
            </div>
            <button className='text-sm font-bold text-bright-blue underline hover:cursor-pointer hover:no-underline'>
              Change
            </button>
          </div>
        </div>
        <div className='bg-bright-blue px-3 py-4 mx-6 rounded-xl flex flex-col justify-center'>
          <div className=' text-white font-red-hat-display hover:cursor-pointer hover:font-bold'>
            Proceed to Payment
          </div>
        </div>
        <div className='text-gray-400 font-bold font-red-hat-display py-5 hover:cursor-pointer hover:font-extrabold hover:text-gray-600'>
          Cancel Order
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
