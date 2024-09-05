"use client";
import Layout from "../components/Layouts";
import Image from "next/image";
import profile from "../profile.png";

const About = () => {
  return (
    <Layout>
      <section className="text-center py-12 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-8 px-4">
          Welcome to Your Organization, where passion meets purpose. Our mission
          is to bring together individuals who share a common interest in [Your
          Field/Interest] and to foster a vibrant community through meaningful
          activities and events.
        </p>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p>
                At Your Organization, we strive to [Brief Description of
                Mission]. Our goal is to [Goals and Objectives], and we do this
                through [Methods and Activities]. We believe in [Core Values],
                and we are committed to making a positive impact in our
                community.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our History</h2>
              <p>
                Founded in 2022, Your Organization started with a simple idea:
                [Founding Idea]. Over the years, we have grown into [Description
                of Growth and Achievements]. Our journey has been marked by [Key
                Milestones], and we are proud of the [Impact and Successes] we
                have achieved.
              </p>
            </div>
          </div>
          <div className="text-center py-8">
            <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
            <div className="flex flex-wrap justify-center">
              {/* Replace with actual team members */}
              <div className="w-60 mx-4 mb-4">
                <Image
                  src={profile}
                  alt="Team Member 1"
                  className="w-full h-full object-cover rounded-full mb-2"
                />
                <h3 className="text-xl font-semibold">Team Member 1</h3>
                <p className="text-gray-600">Digital Marketer</p>
              </div>
              <div className="w-60 mx-4 mb-4 ">
                <Image
                  src={profile}
                  alt="Team Member 2"
                  className="w-full h-full object-cover rounded-full mb-2"
                />
                <h3 className="text-xl font-semibold">Team Member 2</h3>
                <p className="text-gray-600">Developer</p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
