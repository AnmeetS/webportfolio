interface Props {
    title: string;
}

const TitleCreator = ({title}: Props) => {
  return (
    <h2 className="font-titleFont text-2xl font-semibold flex items-center">
        <span className="text-base md:text-lg text-primaryLight mr-2">//</span>
        {title}
        <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-textLight ml-6"></span>
    </h2>
  )
}

export default TitleCreator