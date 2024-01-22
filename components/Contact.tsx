import TitleCreator from "./TitleCreator"

const Contact = () => {
  return (
    <section 
     id="contact"
     className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-6 items-center justify-center"
    >
      <TitleCreator title="Contact Me"/>
      <h2 className="font-titleFont text-5xl font-semibold">
        I love to chat about games
      </h2>
      <p className="max-w-[600px] text-center text-copyLightest">
        I&apos;m currently open for any new work opportunities. Whether you have a question or just want to say hi, Reach out to me and I&apos;ll
        be sure to get back to you!
      </p>
      <a href="mailto:as2sekho@uwaterloo.ca">
        <button className="w-40 h-14 border border-textLighter mt-6 font-titleFont text-sm text-textLighter tracking-wider rounded-md hover:bg-foreground duration-300">
          Say Hello
        </button>
      </a>
    </section>
  )
}
export default Contact