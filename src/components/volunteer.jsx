import {useNavigate} from "react-router-dom";
import VolunteerImg from "../assets/volunteer.png";

const Volunteer = () => {
    const navigate = useNavigate();
    return (
        <div
            className="flex flex-col w-screen h-screen items-center justify-start bg-white"
            style={{overflow: "hidden", paddingTop: "2rem"}} // Added top padding
        >
            <div className="max-w-4xl mx-auto p-6">
                {/* Main Content Card */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
                    {/* Left Section: Text Content */}
                    <div className="md:w-1/2 md:pr-6">
                        <h1 className="text-2xl font-bold text-purple-700 mb-4">
                            WHY JOIN Kaya Natin! Youth - Moncada?
                        </h1>
                        <p className="text-lg font-bold text-black mb-4">
                            Dahil kasama ka, muli nating Kakayanin!
                        </p>
                        <p className="text-base text-gray-700 mb-4">
                            Samahan niyo kami sa biyahe ng pagsulong ng good governance at
                            sama-sama tayong tumindig para sa malayang lipunan!
                        </p>
                        <p className="text-base text-gray-700 mb-4">
                            Ang Kaya Natin! Youth - Moncada ay miyembro ng Local Youth
                            Development Council ng Moncada at accredited bilang Civil Society
                            Organization (CSO).
                        </p>
                        <p className="text-base text-gray-700 mb-4">
                            Ano pang hinihintay mo? sumama na sa pag-sulong ng ethical,
                            effective, at empowered youth leadership.
                        </p>
                        <p className="text-base text-gray-700 mb-4">
                            Hindi namin kakayanin kung kami lang—kailangan kaya natin!
                        </p>
                    </div>

                    {/* Right Section: Image */}
                    <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
                        <img
                            alt="Group of people standing on a stage with a colorful background and a red carpet"
                            className="rounded-lg shadow-lg"
                            src={VolunteerImg}
                            width="600"
                            height="400"
                        />
                    </div>
                </div>

                {/* Call-to-Action Button */}
                <div className="flex justify-center mt-4">
                    <button
                        className="bg-teal-400 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-teal-500"
                        onClick={() => navigate("/signup")}>
                        Become a Volunteer Today!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;