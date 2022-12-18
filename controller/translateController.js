
import translate from "translate";
const translateWord = async (req, res) => {
    try {
        const { text, to } = req.body;
        const result = await translate(text, { to: to });
        return res.status(200).json({ result });
    } catch (error) {
        return res.status(500).send({ message: "Server error" });
    }

}

export default {
    translateWord
};


