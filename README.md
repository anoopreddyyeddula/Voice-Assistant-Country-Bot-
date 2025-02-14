# CountryBot - A Voice Assistant Project

Link: https://bot.dialogflow.com/5df34f0a-e78b-46b9-8429-6085c807afb3

CountryBot is a conversational voice assistant application designed to provide users with real-time information about different countries, including currency details, population statistics, COVID-19 data, tourism insights, and internet usage. Built using the Alexa Developer Console and Dialogflow, CountryBot delivers valuable insights in a conversational format, making it an ideal tool for research, travel planning, or general curiosity about countries around the world.

## Key Features

- **Real-Time Data**: Fetches live data from external APIs to provide up-to-date country information.
- **Voice-Driven Interaction**: Users can interact with the bot through voice commands to ask about specific countries.
- **Dynamic Responses**: Generates engaging and personalized replies based on user inputs using natural language processing (NLP).
- **Multi-Intent Support**: Supports multiple user goals such as retrieving currency information, COVID-19 impact, and tourist statistics.

## How It Works

### 1. Interaction Model
CountryBot is built around three main intents, each representing a user goal:

- **Country_currency**: Retrieves information about a country’s currency and population statistics.
- **Covid_Affected**: Provides COVID-19 impact data on a specific country for the year 2020.
- **Country_Tourists**: Offers insights into the number of tourists and internet usage statistics for a given country.

Each intent is trained with 15 sample utterances (phrases) and uses custom slots (parameters) like `country`, `currency`, and `population` to tailor responses to the user.

### 2. API Integration
CountryBot integrates with external APIs to pull real-time data about countries. The retrieved data includes:
- **Population statistics**
- **Currency details**
- **COVID-19 impact data**
- **Tourism insights**
- **Internet usage statistics**

### 3. Fulfillment Logic
The bot processes user queries dynamically:
- If all requested parameters (e.g., currency and population) are provided, the bot fetches the information and returns a complete response.
- If only partial information is provided (e.g., just the currency), the bot responds with the available data and prompts for missing information.

### 4. User Testing
The project underwent rigorous user testing, including:
- **Usability Testing**: Two users completed specific tasks, such as retrieving population and currency details, with task completion time recorded.
- **Likert Scale Testing**: A survey was conducted to assess user satisfaction with the application's performance and usefulness.
- **Open-Ended Feedback**: Users provided feedback on the application's accuracy, clarity, and ease of navigation.

## Technologies Used

- **Alexa Developer Console**: To build and manage the voice interface.
- **Dialogflow**: For natural language understanding and intent handling.
- **External APIs**: For retrieving real-time country data.
- **Node.js**: For processing data and integrating APIs.

## Future Enhancements

- **Multi-Turn Conversations**: Implementing support for extended conversations.
- **Expanded Data**: Integrating additional information such as economic or healthcare statistics.
- **Customization**: Supporting user preferences like language options and personalized recommendations.





---

Thank you for checking out **CountryBot**! If you have any questions or feedback, feel free to reach out or open an issue in the repository.
