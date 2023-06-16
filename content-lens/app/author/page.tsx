"use client";
import React from "react";

export default function BiographyPage() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-6">About Nic Rardin</h1>

      <p className="paragraph">
        Nic Rardin is a passionate software engineer and web developer with a
        strong focus on creating innovative and user-friendly applications. With
        several years of experience in the industry, Nic has honed his skills in
        frontend development, backend architecture, and everything in between.
      </p>

      <p className="paragraph">
        Throughout his career, Nic has worked on numerous projects, ranging from
        small personal websites to large-scale enterprise applications. His
        expertise lies in crafting elegant solutions that leverage the latest
        technologies and best practices to deliver exceptional user experiences.
      </p>

      <p className="paragraph">
        Nic's dedication to continuous learning and staying up-to-date with the
        ever-evolving web development landscape has enabled him to tackle
        complex challenges head-on. He has a deep understanding of various
        frameworks and libraries, including React, Next.js, and Tailwind CSS,
        which he skillfully utilizes to build robust and performant
        applications.
      </p>

      <p className="paragraph">
        Beyond his technical abilities, Nic is known for his strong work ethic,
        collaborative mindset, and excellent communication skills. He thrives in
        team environments and enjoys working closely with cross-functional teams
        to bring ideas to life and deliver exceptional results.
      </p>

      <p className="paragraph">
        In his free time, Nic enjoys exploring new technologies, contributing to
        open-source projects, and sharing his knowledge through writing
        technical articles and tutorials. He believes in giving back to the
        developer community and actively participates in meetups and
        conferences.
      </p>

      <p className="paragraph">
        As the creator of the Librarian app, Nic has combined his passion for
        web development and his desire to empower users with a powerful tool for
        searching and highlighting content. Librarian is a testament to Nic's
        commitment to creating meaningful and impactful applications that
        enhance the web browsing experience.
      </p>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .paragraph {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
