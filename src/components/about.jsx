import React, {useState} from "react";
import AboutUs from "../assets/aboutUs_img.png"
import Mission from "../assets/aboutUs_mission.png"
import Vision from "../assets/aboutUs_vision.png"

const About = () => {
    const [expandedMemberIndex, setExpandedMemberIndex] = useState(null);

    const handleMemberClick = (index) => {
        setExpandedMemberIndex(index === expandedMemberIndex ? null : index);
    };

    return (
        <div className="flex flex-col items-center justify-start w-screen overflow-hidden bg-white">
            {/* Section 1: About KNY */}
            <section
                id="about-kny"
                className="flex items-center justify-center w-full px-10 py-4 "
            >
                <div className="max-w-4xl w-full mx-auto flex flex-col">
                    {/* Section Title with Divider */}
                    <div className="flex items-center justify-center my-8">
                        <div className="border-t border-gray-400 flex-grow"></div>
                        <h2 className="text-2xl font-bold text-gray-800 px-4">ABOUT US</h2>
                        <div className="border-t border-gray-400 flex-grow"></div>
                    </div>

                    <div className="flex flex-col md:flex-row mt-3">
                        <div className="bg-white p-6 rounded-lg shadow-lg md:w-3/5 md:mr-6">
                            <h1 className="text-2xl font-bold text-purple-800 mb-12">
                                WHAT IS Kaya Natin! Youth - Moncada?
                            </h1>
                            <p className="mb-4 text-gray-600 leading-relaxed text-justify">
                                Kaya Natin is a non-profit and non-government organization that
                                promotes good governance and ethical leadership in the
                                Philippines.
                            </p>
                            <p className="mb-4 text-gray-600 leading-relaxed text-justify">
                                It creates opportunities for good governance to flourish through
                                undertaking programs that hone ethical, effective, and
                                empowering leadership, and engage citizens to take action
                                towards unity and progress in our country.
                            </p>
                            <p className="mb-4 text-gray-600 leading-relaxed text-justify">
                                Kaya Natin was founded on the ideal of connecting good people,
                                good leaders, and good institutions to work together and find
                                strength in each other to build a just, free, and participative society.
                            </p>
                            <p className="mb-4 text-gray-600 leading-relaxed text-justify">
                                Kaya Natin, in English, means "we can do it"; because together,
                                there is no dream or goal we cannot achieve.
                            </p>
                            <p className="mb-4 text-gray-600 leading-relaxed text-justify">
                                Kaya Natin!
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg md:w-2/5">
                            <img
                                alt="Group of Kaya Natin team members during a donation drive"
                                className="rounded-lg shadow-lg"
                                src={AboutUs}
                            />
                            <p className="text-sm text-gray-600 mt-2">
                                In frame: Kaya Natin Team Donation Drive For #KRISTINEPH Victims
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Mission and Vision */}
            <section
                id="mission-vision"
                className="flex items-center justify-center w-fullpx-6 py-4"
            >
                <div className="max-w-4xl w-full mx-auto flex flex-col">
                    {/* Section Title with Divider */}
                    <div className="flex items-center justify-center mb-6">
                        <div className="border-t border-gray-400 flex-grow"></div>
                        <h2 className="text-2xl font-bold text-gray-800 px-4">
                            MISSION AND VISION
                        </h2>
                        <div className="border-t border-gray-400 flex-grow"></div>
                    </div>

                    <div
                        className="text-gray-600 flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="md:w-1/2 p-4 bg-white rounded-lg shadow-lg mr-6">
                            <img
                                alt="Group of young people participating in an activity"
                                className="w-full rounded-lg"
                                src={Mission}
                            />
                            <h2 className="text-xl font-bold mt-4 text-center mb-3">Mission</h2>
                            <p className="mt-2 text-justify">Our Mission as Kaya Natin! Youth are as follows:</p>
                            <ul className="list-disc list-inside text-justify">
                                <li>Serve as a sanctuary for effective, ethical and empowering leaders with courage,
                                    dignity and integrity.
                                </li>
                                <li>Promote transparency, accountability, people's participation and electoral
                                    reforms.
                                </li>
                                <li>Facilitate in the translation of good governance and ethical leadership into the
                                    delivery of basic community.
                                </li>
                                <li>Create venues and establish innovative programs to educate and enable citizenry to
                                    actively participate in good governance.
                                </li>
                            </ul>

                        </div>
                        <div className="md:w-1/2 p-4 bg-white rounded-lg shadow-lg">
                            <img
                                alt="Group of young people holding certificates"
                                className="w-full rounded-lg"
                                src={Vision}
                            />
                            <h2 className="text-xl font-bold mt-4 mb-3 text-center">Vision</h2>
                            <p className="mt-2 text-justify">
                                A Philippines led by ethical leaders in partnership with an
                                enlightened citizenry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: History */}
            <section
                id="history"
                className="flex items-center justify-center w-full px-6 py-4"
            >
                <div className="max-w-4xl w-full mx-auto flex flex-col">
                    {/* Section Title with Divider */}
                    <div className="flex items-center justify-center my-6">
                        <div className="border-t border-gray-400 flex-grow"></div>
                        <h2 className="text-2xl font-bold text-gray-800 px-4">HISTORY</h2>
                        <div className="border-t border-gray-400 flex-grow"></div>
                    </div>

                    {/* History Section */}
                    <div className="p-6 rounded-lg shadow-lg mb-8">

                        <div className="">

                            <p className="text-gray-600 text-justify leading-relaxed">
                                Kaya Natin! Movement was established in 2008 by then Naga Mayor Jesse Robredo (+),
                                then Pampanga Governor Eddie "Among Ed" Panlilio, and then Isabela Governor Gracia
                                "Grace" Padaca to provide a sanctuary for ethical, effective, and empowering leaders
                                throughout the country at a time when corruption and ineffective governance plagued
                                the nation and government.
                            </p>
                        </div>

                    </div>

                    {/* Partners Section */}
                    <div className="w-full flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-red-600 mb-6">Partners</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-6 max-w-6xl px-4">
                            {Array.from({length: 8}).map((_, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <img
                                        alt={`Partner Logo ${index + 1}`}
                                        src={`https://via.placeholder.com/150?text=Logo+${index + 1}`}
                                        className="h-24 w-24 rounded-lg shadow-lg"
                                    />
                                    <p className="text-sm text-gray-600 mt-2">{`Organization ${
                                        index + 1
                                    }`}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Team */}
            <section
                id="team"
                className="flex flex-col items-center justify-center w-full px-6 py-4"
            >
                <div className="max-w-4xl w-full mx-auto flex flex-col mb-12">
                    {/* Section Title with Divider */}
                    <div className="flex items-center justify-center mb-4 w-full mt-6">
                        <div className="border-t border-gray-400 flex-grow"></div>
                        <h2 className="text-2xl font-bold text-gray-800 px-4">TEAM</h2>
                        <div className="border-t border-gray-400 flex-grow"></div>
                    </div>

                    <div className="flex flex-wrap justify-center items-center">
                        {[
                            {name: "Member 1", position: "Position 1"},
                            {name: "Member 2", position: "Position 2"},
                            {name: "Member 3", position: "Position 3"},
                        ].map((member, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center mx-4 my-4 max-w-[200px]"
                            >
                                <div
                                    className="bg-gray-200 rounded-full h-24 w-24 flex items-center justify-center cursor-pointer"
                                    onClick={() => handleMemberClick(index)}
                                >
                                    {/* Placeholder for profile picture */}
                                    <span>{member.name.slice(0, 2)}</span>
                                </div>
                                <h3 className="text-sm font-bold mt-2">{member.name}</h3>
                                <p className="text-xs text-gray-600">{member.position}</p>
                                {expandedMemberIndex === index && (
                                    <div
                                        className="mt-2 p-2 border border-gray-300 rounded bg-gray-100 text-gray-600 text-xs text-left">
                                        Detailed biography and contributions of {member.name}.
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;