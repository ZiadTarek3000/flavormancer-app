interface ChooseUsCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
}

export default function ChooseUsCards({ icon: Icon, title, desc }: ChooseUsCardProps) {
  return (
      <div className="bg-white shadow-xl rounded-3xl p-8 w-85 h-60 text-center flex flex-col justify-around items-center">
        <div className="text-green-600 text-5xl">
          <Icon className="text-green-500 w-15 h-15" />   {/* ← هنا بنرندر الآيقونة */}
        </div>

        <div>
            <h3 className="text-xl text-black font-bold mb-2">{title}</h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {desc}
            </p>
        </div>
    </div> 
  );
}


