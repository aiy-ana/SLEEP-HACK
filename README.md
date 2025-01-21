# Cycling Through Sleep

A hackathon project developed during **VicHack 2024** aimed at enhancing Samsung's voice assistant, Bixby, by integrating **sleep cycle calculations** to suggest optimal alarm times based on user preferences and sleep patterns.

## Features
- **Personalized Alarm Recommendations**: Calculates and recommends alarm times based on user-provided sleep duration preferences and scientific sleep cycle data.
- **Integration with Bixby**: Seamless integration with Samsung's voice assistant, offering a hands-free user experience.
- **Customizable Settings**: Users can adjust preferences such as ideal wake-up windows and sleep durations.

## Technology Stack
- **Programming Languages**: Python, JavaScript
- **APIs and Libraries**: 
  - Flask (backend development)
  - Numpy and Pandas (data calculations)
  - Samsung Bixby API (integration with voice assistant)
- **Frontend**: HTML, CSS, Bootstrap
- **Tools**: Jupyter Notebook, VSCode, Git

## How It Works
1. **User Input**: Users provide their desired sleep duration or wake-up time.
2. **Sleep Cycle Calculation**: The system uses sleep cycle data (typically 90-minute intervals) to compute optimal times for going to bed or waking up.
3. **Bixby Interaction**: Bixby presents these recommendations through voice or visual outputs.

## Installation
To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/sbob28/SLEEP-HACK.git
   ```
2. Navigate to the project directory:
   ```bash
   cd SLEEP-HACK
   ```
3. Install required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask app:
   ```bash
   python app.py
   ```
5. Open the app in your browser at `http://localhost:5000`.

## Challenges and Solutions
- **Challenge**: Ensuring accurate sleep cycle calculations for varying user preferences.
  - **Solution**: Incorporated research-backed sleep cycle data and allowed flexible inputs.
- **Challenge**: Seamless integration with Bixby.
  - **Solution**: Utilized Samsung's API documentation to enable a smooth user experience.

## Future Enhancements
- Integration with wearable devices to track real-time sleep data.
- Advanced analytics to provide insights into sleep quality.
- Multi-language support for global accessibility.

## Contributors
- **Srividya Bobba**: Data Analysis, Backend Development
- **Vishwa Patel**
- **Harkirat Singh**
- **Aditya Arya**
- **Ayaina**
- **Keevan**

## Acknowledgments
Special thanks to **VicHack 2024** for hosting the hackathon and Samsung for providing API support and guidance.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---
For more information, visit my [portfolio](https://sbob28.github.io/datascienceportfolio/).
