from zhipuai import ZhipuAI 
 
client = ZhipuAI(api_key="406281c034e39e55e05767ddd28fa9b3.I4A28mucE8NAUtkn")  
response = client.chat.completions.create(
  model="GLM-3-Turbo",  
  messages=[
    {"role": "user", "content": "评价肖洛霍夫的写作思想"},
  ],

  # 拓展参数
  extra_body={"temperature": 0.5, "max_tokens": 1024},
)
print(response) 
