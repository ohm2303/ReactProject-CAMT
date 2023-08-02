Lab - Start
==========

Before you start
----------
The purpose of this lab is to guide you through setting up the envionment for the following labs. 

You may skip the setup to setup Java if you already have JDK installed on your machine. 

Throughout this course, we will use Github to manage your labs and assignment.

You have two options to do your lab exercise 
1. using VSCode on your machine, you are required to install Java, Maven, Git and VSCode as details below.
2. using Codespace on Github, this simulate a machine with VSCode on the Github server. If you choose to do this, you don't need to install any of those tools. The disadvantage is starting up codspace could take some times. Also, you are limited to 90 hours/month to use it as a student. Codespace can be open by simply clicking on `<>code` button > Codespace > click `Create codespace on master`.

## Learn Github
GitHub :octocat: is a web-based platform for version control and collaboration that uses Git, a distributed version control system, as its backend. It provides developers a centralized place to store, track, and collaborate on their software development projects.

With GitHub, developers can create a project (repository) and invite others to collaborate. Team members can then make changes to the project's files, and those changes are tracked over time so that the team can see the evolution of the project and roll back to previous versions if necessary. GitHub also provides a wide range of collaboration tools, such as pull requests, code review, issue tracking, and wikis, that allow teams to work together effectively.

**What is Github Classroom**
GitHub Classroom is a tool that allows teachers to manage and organize assignments and feedback for their programming classes. It is built on top of GitHub and uses the same infrastructure for version control, collaboration, and code review, but adds additional functionality to streamline the process of assigning, collecting, and grading programming assignments.

:octocat: ***Throughout this course, we will use Github to manage code for both lab and assignment, as well as exams.***

Everytime you accept a lab assignment, you will have your own repository on Github to work on it. We will mark this lab on your repository. There are basic git operations as follows.
- **Pull** is when you download your source code from the repository on Github.
- **Push** is when you upload your source code to the respository on Github.
- **Commit** is when you finish coding (and testing) and prepare the code to push to repository. This commit operation save the source code to the local repository on your machine. 

There are other git operations, more info [here](https://education.github.com/git-cheat-sheet-education.pdf). You don't need to know all of them for now.

However, all you need to know now is when you want to start working on the lab is to **pull** the project using Eclipse. After you finish making your lab, you have to **commit and push** the project using Eclipse.


## Setup Java
We will need JDK (Java Development Kit) installed on your machine. It is recommended that you use Java version 11 for this course. 
- Download the latest version of the OpenJDK 11 from the AdoptOpenJDK website (https://adoptopenjdk.net/) or OpenJDK website (https://jdk.java.net/). Make sure to download the JDK, not the JRE. ***For windows user, please download MSI file, instead of zip as it is easier to install***

- Once the download is complete, open the installer and follow the prompts to install Java. On Windows, you can simply double-click the installer executable to begin the installation process. On MacOS and Linux, you might need to use the terminal and give execute permission to the downloaded package, then run the installer.

- After the installation is complete, you should set the JAVA_HOME environment variable to point to the location where you installed the JDK. 
    - On Windows, you can set the variable by going to Control Panel > System > Advanced system settings > Advanced > Environment Variables. 
    - On MacOS and Linux, you can add the following line to your .bash_profile or .bashrc file:

```
export JAVA_HOME=/usr/lib/jvm/jdk-11.0.11
```
On MacOS and Linux, you should update your system's PATH variable to include the bin directory of the JDK. For example, on UNIX-based systems, you can add the following line to your .bash_profile or .bashrc file:

```
export PATH=$PATH:$JAVA_HOME/bin
```
- Verify that the installation is successful by opening a command prompt (on Windows, go to windows button > type `cmd`) and running the command
```
javac -version
```

This should display the version of Java that you just installed.


## Setup Maven
Apache Maven is a build automation tool for Java projects. Here are the general steps for installing Maven on your computer:

- Download the latest version of Maven from the [Apache Maven website](https://maven.apache.org/download.cgi). You can choose either the binary tarball or the binary zip archive.

- Extract the downloaded archive to a directory on your computer. The recommended installation location is under /usr/local/ on UNIX based systems and c:\Program Files on windows system

## Setup Git
Git is a source code versioning system that we will use for manging all labs and assignments. To use Git on your machine, we need to install git.
- Download the latest version of git at [Git website](https://git-scm.com/downloads)
- Run the executable file that you download to install git (Click next all the way through)
- Type the following commands to set your name and email on Git. This information is used to stamp your code, everytime you push the code to the Git. Please replace FIRST_Name LASTNAME and ID with yours.

```
git config --global user.name "FIRST_NAME LAST_NAME"
git config --global user.email "ID@lamduan.mfu.ac.th"
```

## Setup VSCode

To install Visual Studio Code (VS Code), you will first need to download the installer for your operating system.

- Go to the VS Code website [here](https://code.visualstudio.com/) and click on the "Download" button.

- Choose the installer for your operating system (Windows, macOS, or Linux) and download it.

- Once the download is complete, open the installer and follow the prompts to install VS Code.

- After the installation is complete, you can launch VS Code by clicking on its icon in the start menu (Windows) or Applications folder (macOS and Linux).

Note: If you are using Linux and you want to install it via command line, you will find the instructions on how to install it on official VS Code website.

When you start the VS Code for the first time, you will be prompted to select the theme and the syntax highlighting. you also can customize it based on your preference later on under settings.

Then, you will need install extension on VSCode by clicking on extension icon on the left hand side, search and install the following extension
- Extension Pack for Java
- Maven for Java
- Github Classroom

**Please restart VSCode after installing all these extension.**

#### Config Maven extension
Go to Maven for Java Extension and click on Manage icon (a gear icon somewhere after `Switch to Pre-release` button), then choose `Extension Setting` and find configuration for `Maven › Executable: Path`
- Here you need to set the path location to where the maven is such as c:\Program Files\apache-maven-3.8.7\bin\mvn.cmd

 

## Open Project in VSCode
In Github class room tab on the left  (Github octocat logo :octocat:), 
- Click Sign in and use the same user account that you use to accep this lab assignment.
- After logged in, you should see the assignments that you have accepted, click 'open assignment' icon
- Now go to the project in the **Explorer** tab (the two files icon on the left hand side)
You should see your project under Java Projects view and an item _lab-start_ under Maven view

- All code changes should be done from Java Projects view.
- The item in Maven allow you to run test the project by right click on it and choose _verify_

## Lab Project
In this project, you will see pom.xml file (You can only see this under Explorer view). It is Maven's project configuration file, which defines necessary library and how the project can be built. You don't have to modify anything in there unless we tell you so. When you open it, it specifies the library needed to build this project and the version of Java complier. 

In Maven project, there are two important subfolders 
- src/main/java is where the actual source code of the program where. 
- src/test/java is where the unit test script is. 

Currently, there are two files, _HelloWorld_ is a program that return helllo message, and _TestHelloWorld_ is a test script that check if HelloWorld program runs properly. 

- Run unit test script to test if the program runs properly by right click on _TestHelloWorld_ 
- choose __Run Tests__. The green check :white_check_mark: icon indicate that the test passes. If the test fails, a red cross :x: icon appears. 

The test should fail now because the program supposes to print outs "Hello James" but it prints out "Hi James", please follow the next step to fix this.

:+1: Let's fix the program in this project and push it back to the Github. Go to HelloWorld.java and change from 'Hi' to 'Hello'. Please see TODO comment. 

:sparkles: **Hint: Thoughout every lab, you will find TODO comment all over, please pay attention to these TODO as they guide you to complete the exercise**

- Rerun the test script to make sure the test passes. 
- Also try to run maven test_start by right click and choose _verify_. This is a maven' goal that calls all test scrips located in the projects to prove that everthing is good to go. 

To commit and push the project, Go to **Source Control** tab.
- click + for all file changed
- type in message (please make it meaningful, like "fixed bug in HelloWorld" or "Change Hi to Hello")
- click _Commit_ button
- click _Sync Changes_

**Please remember you have to commit the code every time you submit the lab, assignment or exams** Otherwise, we won't be able to mark your work.

Last check, on Github repository (on the Web), please ensure :white_check_mark:	apears (around middle of the page, below `Go to file` button.), This tells that your exercise has been completed, passed and marked :tada: :tada:. The incomplete and fail exercises is indicated by a red x :x:.

Oh one last thing!
----------------
Please introduce yourself by editing this file (README.md), put in your name/ nick name or how you want us to call you below between \`\`\` symbols (replace "Your name"). And commit and Push this project again. Please make sure your name is updated on Github as well.

```
Your name
```
:tada: Sweet! That's all for this lab. You are now ready to make a real deal in the next lab.

***If you are using codespace to do this lab, please remove it after you complete. As we don't want to waste unused hours***
