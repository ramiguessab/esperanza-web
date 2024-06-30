export default function AboutUs() {
    return (
        <div className="flex flex-wrap-reverse text-white items-center justify-around lg:h-[calc(100vh-4rem)] mt-4">
            <div className="w-5/6 md:w-1/2 lg:w-1/3 flex flex-col gap-4">
                <img src="/assets/Team.png" alt="team" className=" -rotate-6 " />
                <img src="/assets/sticker.png" alt="sticker" className="rotate-6 "/>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-evenly h-full text-sm p-2 ">
                <div className="border-dotted border-2 border-sky-500 p-6 rounded-lg leading-7 mb-2 ">
                    <p className="font-bold text-2xl text-center underline underline-offset-4">About us</p>
                    <p className="text-center lg:text-left">
                        Esperanza Club is the first scientific club in university of Jijel founded in 2019 by some students.
                        Our purpose is to help students to improve their skills and to help them to find their passion in the field of technology and science.
                        Our themes revolve around information technologies, and we always seek to develop our topics in various technical fields that help the student acquire the cognitive ability that enables him to move to the labor market with high efficiency.
                    </p>
                </div>
                <div className="border-dotted border-2 border-sky-500 p-6 rounded-lg leading-7 my-2">
                    <p className="font-bold text-2xl text-center underline underline-offset-4">Statistics</p>
                    <p className="text-center lg:text-left">
                        The club contains more than 60 members studying in various university majors such as computer science, mathematics, physics, automatics, biology... <br />
                        The number of members has increased significantly in recent years, due to the many activities offered by the club, which is considered one of the largest university clubs in terms of number of members at the University of Jijel.
                    </p>
                </div>
                <div className="border-dotted border-2 border-sky-500 p-6 rounded-lg leading-7 my-2">
                    <p className="font-bold text-2xl text-center underline underline-offset-4">Departments</p>
                    <p className="text-center lg:text-left">
                        Our club has several departments that help the student to improve his skills in a specific field, such as the Management department, the IT department, the Media department, the Agenda department, the External Relations department, and the Human Resources department.
                    </p>
                </div>
            </div>
        </div>
    );
}
