function appendMessage(role, content) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", role);
    messageDiv.innerHTML = `<strong>${role}: </strong>${content}`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function askQuestion() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    appendMessage("user", userInput);

    try {
        const response = await fetch("https://open.bigmodel.cn/api/paas/v4/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "406281c034e39e55e05767ddd28fa9b3.I4A28mucE8NAUtkn" // 替换为你的 API 密钥
            },
            body: JSON.stringify({ 
                assistant_id: "https://open.bigmodel.cn/trialcenter?appId=1782363244959264769", // 替换为你的机器人 ID
                message: userInput
            })
        });

        if (response.ok) {
            const data = await response.json();
            const answer = data.data.answer;
            appendMessage("assistant", answer);
        } else {
            throw new Error("Failed to fetch response from Zhipuai AI API");
        }
    } catch (error) {
        console.error("Error:", error.message);
        appendMessage("assistant", "抱歉，出现了一些问题，无法获取回答。");
    }
}