# Personal Finance Assistant (Backend)

This is the **backend service** that powers the Finance AI Assistant frontend. It handles APIs, manages the **database connections**, and integrates with **Perplexity AI** for AI-based interactions.

## Setup Instructions – Backend

**Clone the Repository**

    git clone [<backend-repo-url>](https://github.com/anujgawde/personal-finance-assistant)
    cd personal-finance-assistant

**Install Dependencies**

    npm install

**Set Up Database**  
 Create a new database in your preferred database provider (e.g. **NeonDB**).

**Create Perplexity AI Account**

    -   Sign up for a Perplexity AI account.
    -   Generate an API key from the Perplexity AI dashboard.

**Configure Environment Variables**

- Update the `Database.provider` file with your database credentials and environment variables.
- Replace the Perplexity AI access token in the backend code with the API key you generated.
- **Run the Backend Service**  
  Start the backend application:

      npm run start
