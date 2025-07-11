# Personal Website

This repository houses the files for my personal website, a project derived from **Tharindu N. Madhusanka's** website, distributed under the **MIT License**. This derivation acknowledges the original work and adheres to the terms of the MIT License, ensuring appropriate attribution and open-source compliance.

## Website Content and Features

My website is meticulously designed to provide a comprehensive and engaging overview of my professional journey, skills, and personal interests. It features the following key sections, each serving a distinct purpose:

* **Home**: This serves as the primary landing page, offering a concise introduction to my professional identity. It provides a summary of my key work experiences and includes prominent links to featured articles and projects, allowing visitors to quickly grasp my core competencies and interests.
* **About**: This section delves deeper into my professional and personal narrative. It offers a more detailed description of my background, outlining my professional philosophy, work methodologies, and the principles that guide my approach to problem-solving and collaboration.
* **Resume**: This page presents a structured and detailed outline of my qualifications. It comprehensively lists my technical proficiencies, professional certifications, educational background, and a chronological history of my professional roles and responsibilities.
* **Projects**: This is a curated showcase of personal projects I have undertaken. These projects, often developed for personal enjoyment and exploration, demonstrate my practical application of various technologies, problem-solving skills, and creative approaches to development. Each project includes a brief description and, where applicable, links to live demos or source code repositories.
* **Articles**: This section contains a collection of articles I have authored. These pieces are primarily written for my own reflection and to document insights gained from my experiences. They are also shared with the aim of potentially assisting others in the wider development community by offering perspectives, tutorials, or analyses on various technical topics.
* **Contact**: This page provides multiple avenues for visitors to get in touch with me. It typically includes a contact form, professional social media links, and an email address, facilitating easy communication for collaborations, inquiries, or networking.

Beyond these core content sections, the website also includes essential legal and informational pages such as the **Terms of Service**, a comprehensive **Privacy Policy** outlining data handling practices, and an **Acknowledgements** section to credit external resources, libraries, or individuals who have contributed to the website's development or design.

---

## Building and Deploying the React Application

This section provides a step-by-step guide on how to build a production-ready version of the React application and subsequently deploy it to a web server. This process ensures the application is optimized for performance and ready for public access.

### Prerequisites

Before proceeding with the build and deployment steps, ensure that your development environment is set up correctly. Specifically, you must have **Node.js** and **npm** (Node Package Manager) installed on your system. These tools are fundamental for managing project dependencies and running build scripts for React applications.

### Building the Application for Production

To create an optimized production build of the React application, you will utilize the `npm run build` command. This command triggers a series of processes, including transpilation of modern JavaScript code, optimization of assets (such as images, CSS, and JavaScript files), and minification, all aimed at creating a highly efficient and lightweight static bundle of your application. The output of this process will be generated within the `build/` directory.

Here's how to initiate the build process:

1.  **Open your terminal or command prompt.** This can be any command-line interface available on your operating system (e.g., Command Prompt on Windows, Terminal on macOS/Linux).
2.  **Navigate to the root directory of your React application.** This is the directory where your `package.json` file is located. Use the `cd` (change directory) command:
    ```bash
    cd /path/to/your/react-app
    ```
    (Replace `/path/to/your/react-app` with the actual path to your project.)
3.  **Execute the build command:**
    ```bash
    npm run build
    ```
    Once the command completes successfully, you will find a newly created or updated `build/` directory at the root of your project. This directory contains all the static files (HTML, CSS, JavaScript, images) that constitute your optimized production application.

### Deploying to a Web Server

After successfully building your application, the next crucial step is to transfer the contents of the `build/` directory to your web server's public-facing directory. This directory is typically named `public_html`, `www`, `htdocs`, or a similar designation, depending on your hosting provider or server configuration. The goal is to make these static files accessible to web browsers. You can achieve this transfer using various methods, with common options including:

* **FTP/SFTP Client**: Software like FileZilla allows you to graphically connect to your server and drag-and-drop files.
* **`scp` (Secure Copy Protocol)**: A command-line utility for securely transferring files between a local host and a remote host, or between two remote hosts. This method is often preferred for automation and security.

Here’s an example demonstrating the use of `scp` to transfer the files:

```bash
scp -r build/* user@example.com:/var/www/html
```

### Important Considerations for Deployment:

`user:` Replace `user` with your actual SSH username configured on your web server. This is the credential you use to log in via SSH.

`example.com:` This placeholder must be replaced with your server's actual domain name (e.g., `yourdomain.com`) or its public IP address (e.g., `192.168.1.100`).

`/var/www/html:` This path represents the target public directory on your server where your website files should reside. This path can vary significantly depending on your web server software (e.g., Apache, Nginx) and hosting environment. Common alternatives include `/home/youruser/public_html`, `/var/www/yourdomain.com/public`, or similar. Always verify the correct public directory path with your hosting provider or server administrator.

### Verifying Deployment
Once the files have been successfully transferred to your server, your personal website should become accessible to anyone navigating to your server's domain name. To confirm that the deployment was successful and your website is live:

1. Open a web browser of your choice (e.g., Chrome, Firefox, Safari).
2. Navigate to your server's domain name by typing it into the address bar:

`[http://example.com](http://example.com)`
(Remember to replace example.com with your actual domain name.)

If all steps were followed correctly, you should now see your personal website displayed in the browser, live and accessible to the world!
