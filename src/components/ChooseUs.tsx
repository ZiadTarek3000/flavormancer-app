import { Soup , ShieldCheck , Van} from 'lucide-react';
import ChooseUsCards from './ChooseUsCards';

export default function ChooseUs() {
  return (
    
    <section className="py-24 text-center flex flex-col gap-8">

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-black">WHY CHOOSE US?</h2>


      <div className='w-100 m-auto'>
        You will choose us because you get the best quality food from us and we deliver fast.
      </div>

      
      
      <div className='flex flex-row justify-between'>
        <ChooseUsCards 
        icon={Soup} 
        title="Serve Healthy Food" 
        desc="We serve all healthy food here. You can choose any food you like."  />

        <ChooseUsCards
        icon={ShieldCheck} 
        title="Best Quality"
        desc="Our food quality is excellent. You will get exactly what you want here."  />


        <ChooseUsCards 
        icon={Van} 
        title="Fast Delivery" 
        desc="You can say the main goal of our delivery man is to deliver orders quickly. You will recieve it shortly after ordering"  />
        
       </div>

    </section>  
  );
}



