interface ChooseUsCardProps {
  icon: React.ElementType
  title: string
  desc: string
}

export default function ChooseUsCards({ icon: Icon, title, desc }: ChooseUsCardProps) {
  return (
    <div
      className="
        bg-white
        shadow-xl
        rounded-3xl
        p-6
        sm:p-8
        text-center
        flex
        flex-col
        items-center
        gap-4

        w-full
        max-w-sm
      "
    >
      {/* Icon */}
      <div className="text-green-500">
        <Icon className="
          w-10 h-10
          sm:w-12 sm:h-12
          lg:w-14 lg:h-14
        " />
      </div>

      {/* Content */}
      <div>
        <h3 className="
          text-lg
          sm:text-xl
          font-bold
          text-black
          mb-2
        ">
          {title}
        </h3>

        <p className="
          text-gray-500
          text-sm
          leading-relaxed
        ">
          {desc}
        </p>
      </div>
    </div>
  )
}



