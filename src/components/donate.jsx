import React, {useState} from "react";

const Donate = () => {
    const [activePayment, setActivePayment] = useState(null); // State to track active payment method

    const handlePaymentClick = (paymentMethod) => {
        setActivePayment(activePayment === paymentMethod ? null : paymentMethod); // Toggle payment accordion
    };

    return (
        <div
            className="flex flex-col w-screen h-auto items-center justify-start bg-white"
            style={{overflow: "hidden", paddingTop: "2rem"}} // Added top padding
        >
            <div className="max-w-4xl mb-20">
                <h1 className="text-2xl font-bold text-black">
                    Be the Change, Make a Difference!
                    <span className="text-blue-500"> Donate Now!</span>
                </h1>
                <div className="flex flex-col md:flex-row mt-4">
                    {/* Left Section */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md md:w-1/3">
                        <img
                            alt="Illustration of people working together for a cause"
                            className="w-full mb-4 rounded-lg"
                            src="https://storage.googleapis.com/a1aa/image/BQyXLlJKbBIxHgUH8HD75Soh7myhnwneSnfcaw_OLzE.jpg"
                        />
                        <p className="text-gray-700 mb-4">
                            Every donation to Kaya Natin! Youth - Moncada directly contributes
                            to creating a brighter future for Filipinos. Your generosity
                            helps us to develop and inspire young leaders to drive positive
                            change, uplifting communities and fostering unity.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Together, we can do it—because no dream or goal is impossible when
                            we work as one!
                            <span className="text-purple-500"> 💜</span>
                        </p>
                        {/*<button className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full">
              Donate
            </button>*/}
                    </div>

                    {/* Right Section */}
                    <div className="md:ml-4 mt-4 md:mt-0 md:w-2/3">
                        <div className="bg-purple-100 p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold text-purple-700">DONATIONS</h2>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-bold text-gray-800">
                                Choose Payment <i className="fas fa-lock"></i> SECURE
                            </h3>

                            {/* Payment Options */}
                            <div className="flex mt-2 text-gray-600">
                                <button
                                    className="bg-white border border-gray-300 rounded-lg py-2 px-4 mr-2 flex items-center "
                                    onClick={() => handlePaymentClick("GCash")}
                                >
                                    <img
                                        alt="GCash logo"
                                        className="mr-2"
                                        src="https://storage.googleapis.com/a1aa/image/OF7K_o1XBBRa2R8gaPU71SmwF8_zwieJH0kLc0wno08.jpg"
                                        width="50"
                                        height="30"
                                    />
                                    GCash
                                </button>
                                <button
                                    className="bg-white border border-gray-300 rounded-lg py-2 px-4 mr-2 flex items-center"
                                    onClick={() => handlePaymentClick("Card Payment")}
                                >
                                    <img
                                        alt="Card Payment logo"
                                        className="mr-2"
                                        src="https://storage.googleapis.com/a1aa/image/ULvy79jt5Lpr584Kh2q7qJxUinRKlyuPIWrKqvBBKxM.jpg"
                                        width="50"
                                        height="30"
                                    />
                                    Card Payment
                                </button>
                                <button
                                    className="bg-white border border-gray-300 rounded-lg py-2 px-4 flex items-center"
                                    onClick={() => handlePaymentClick("Bank Payment")}
                                >
                                    <img
                                        alt="Bank Payment logo"
                                        className="mr-2"
                                        src="https://storage.googleapis.com/a1aa/image/DWxEy2cI2n10Ws4APp4uSmJf5eKqDHzOS71ozkElcSg.jpg"
                                        width="50"
                                        height="30"
                                    />
                                    Bank Payment
                                </button>
                            </div>

                            {/* Accordion Content */}
                            {activePayment === "GCash" && (
                                <div className="mt-4 border border-gray-300 rounded-lg p-4 bg-white shadow">
                                    <h4 className="text-lg font-bold text-purple-700">
                                        GCash Payment Instructions
                                    </h4>
                                    <p className="text-gray-600 mt-2">
                                        1. Open your GCash App.
                                        <br/>
                                        2. Go to the "Send Money" feature.
                                        <br/>
                                        3. Enter the mobile number: <b>0917-XXXXXXX</b>.
                                        <br/>
                                        4. Specify the amount you'd like to donate.
                                        <br/>
                                        5. Confirm the transaction.
                                    </p>
                                </div>
                            )}
                            {activePayment === "Card Payment" && (
                                <div className="mt-4 border border-gray-300 rounded-lg p-4 bg-white shadow">
                                    <h4 className="text-lg font-bold text-purple-700">
                                        Card Payment Instructions
                                    </h4>
                                    <p className="text-gray-600 mt-2">
                                        1. Click on "Proceed to Payment".
                                        <br/>
                                        2. Enter your card details securely.
                                        <br/>
                                        3. Confirm and submit your donation.
                                        <br/>
                                        <br/>
                                        Accepted Cards
                                        <ul>
                                            <li>✔ Visa</li>
                                            <li>✔ MasterCard</li>
                                            <li>✔ AMEX</li>
                                        </ul>
                                    </p>
                                </div>
                            )}
                            {activePayment === "Bank Payment" && (
                                <div className="mt-4 border border-gray-300 rounded-lg p-4 bg-white shadow">
                                    <h4 className="text-lg font-bold text-purple-700">
                                        Bank Payment Instructions
                                    </h4>
                                    <p className="text-gray-600 mt-2">
                                        1. Use the following bank details to make a donation:
                                        <br/>
                                        <b>Account Name:</b> Kaya Natin! Movement
                                        <br/>
                                        <b>Bank Name:</b> BDO Unibank
                                        <br/>
                                        <b>Account Number:</b> 1234-5678-9012
                                        <br/>
                                        <br/>
                                        2. After the transaction, send a copy of your receipt to our
                                        email: <b>donate@kayanatin.org</b>.
                                    </p>
                                </div>
                            )}

                            {/* Additional Info */}
                            <p className="text-gray-600 mt-4">
                                Kaya Natin is committed to your privacy, please read our{" "}
                                <a className="text-blue-500" href="#">
                                    privacy policy here
                                </a>
                                . Your payment details will be processed and a record of your
                                donation will be stored by Kaya Natin.
                            </p>
                            <p className="text-gray-600 mt-2">
                                Other ways to donate:{" "}
                                <a className="text-blue-500" href="#">
                                    PayPal
                                </a>{" "}
                                |{" "}
                                <a className="text-blue-500" href="#">
                                    GrabPay
                                </a>
                            </p>
                            <p className="text-gray-600 mt-2">
                                Problems donating? Visit our{" "}
                                <a className="text-blue-500" href="#">
                                    FAQ
                                </a>{" "}
                                for responses to most common inquiries and questions. Still have
                                problems?{" "}
                                <a className="text-blue-500" href="#">
                                    Send us an email.
                                </a>
                            </p>
                            <p className="text-gray-600 mt-2">
                                Contributions go to Kaya Natin, a non-profit organization based
                                in the Philippines, to be used in its discretion for the purpose
                                of improvement and promoting unity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;