# SnipShare

SnipShare is a lightweight web application for capturing, sharing, and managing code snippets with ease. Ideal for developers looking to quickly save and share snippets across teams or projects.

## Features

- Create and share code snippets via unique URLs  
- Organized snippet history dashboard  
- Syntax highlighting for popular languages  
- Copy-to-clipboard support  
- (Optional) Authentication for private snippet management  

## Tech Stack

- **Backend**: Node.js with Express  
- **Frontend**: React.js + Tailwind CSS  
- **Database**: MongoDB  
- **Syntax Highlighting**: Prism.js  
- **Environment**: dotenv  

## Setup & Installation

1. **Clone the repo:**

   ```bash
   git clone https://github.com/Auxilus08/SnipShare.git
   cd SnipShare
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment variables:**

   Copy `.env.example` to `.env` and fill in values:

   ```bash
   cp .env.example .env
   ```

4. **Run the app:**

   ```bash
   npm run dev
   ```

5. Open your browser at `http://localhost:3000`

## Usage

1. Write or paste your code snippet in the editor.  
2. Select the language for syntax highlighting.  
3. Click **Save** to generate a shareable link.  
4. View and manage existing snippets in your personal dashboard.

## Project Structure

```
project-root/
├── backend/                
├── frontend/               
├── database/               
├── .env.example            
├── LICENSE                 
├── CONTRIBUTING.md         
└── README.md               
```

## License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

## Contact

Created by [Auxilus08].  
For questions or feedback, open an issue or contact me at: example@domain.com

## Badges

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)  
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
