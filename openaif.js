const createImage = async (prompt) => {
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
        apiKey: "you api key here",
    });
    const openai = new OpenAIApi(configuration);

    const img = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "512x512",
    });

    return img.data.data[0].url

}

module.exports = createImage