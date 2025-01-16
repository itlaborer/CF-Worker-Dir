/**
 *  自定义网站配置 
 */
const config = {
  title: "AI工具集",                 //write your website title
  subtitle: "帮助用户快速找到适合自己需求的ai工具，提高工作效率和创造力", //write your website subtitle
  logo_icon: "street view",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
  hitokoto: true,                     //use hitokoto or not
  search:true,                        //enable search function
  search_engine:[                     //choose search engine which you use
    {
      name:"秘 塔",
      template:"https://icon2.yjllq.com/meta.php?q=$s"
    },
    {
      name:"谷 歌",
      template:"https://www.google.com/search?q=$s"
    },
    {
      name:"必 应",
      template:"https://www.bing.com/search?q=$s"
    },
    {
      name:"搜 狗",
      template:"https://www.sogou.com/web?query=$s"
    }
  ],
  selling_ads: false,                  //Selling your domain or not.(turning on may be helpful for selling this domain by showing some ads.)
  sell_info:{
    domain:"nav.00101010.cn",
    price:500,                        //domain price
    mon_unit:"yen sign",              //monetary unit 
    contact:[                         //how to contact you
      {
        type:"envelope",               //contact type ("weixin","qq","telegram plane","envelope" or "phone")
        content:"postadmin@szap.net"
      }
    ]                        
  },
  lists: [                            //Url list
    

    {
      name:"语言生成与对话工具",
      icon:"graduation cap",
      list:[
        {
          url:"https://chatgpt.com/",
          name:"ChatGPT",
          desc:"功能成熟，答案准确，用户体验佳，是多场景通用的AI助手"
        },
        {
          url:"https://claude.ai/",
          name:"Claude",
          desc:"长文撰写、深入分析和日常问答"
        },
        {
          url:"https://gemini.google.com/",
          name:"Gemini",
          desc:"Google 构建的大型语言模型"
        },
        {
          url:"https://tongyi.aliyun.com/",
          name:"通义千问",
          desc:"阿里云开发的全能AI助手"
        },
        {
          url:"https://chatglm.cn/",
          name:"智谱清言",
          desc:"免费全能的AI助手，支持AI绘画、视频生成"
        },
        {
          url:"https://deepseek.com/",
          name:"DeepSeek",
          desc:"探索未至之境，功能全面、价格亲民"
        },
        {
          url:"https://www.tiangong.cn/",
          name:"天工AI ",
          desc:"支持搜索、写作、对话、文档分析、画画、做ppt的全能型ai助手"
        },
        {
          url:"https://doubao.com/",
          name:"豆包",
          desc:"字节旗下AI智能助手，便捷高效，支持文件直接发送和处理"
        },
        {
          url:"https://poe.com/",
          name:"poe.com",
          desc:"利用Poe释放人工智能的潜能"
        },
        {
          url:"https://kimi.moonshot.cn/",
          name:"Kimi.AI",
          desc:"会推理解析，能深度思考的AI助手，多场景适用，支持复杂文档处理"
        },
        {
          url:"https://cloud.siliconflow.cn/",
          name:"SiliconFlow Cloud",
          desc:"专注于提供高效、灵活的 AI 模型训练和推理服务"
        },   
      ]
    },
    {
      name:"效率与办公工具",
      icon:"american sign language interpreting",
      list:[
        {
          url:"https://www.feishu.cn/",
          name:"飞书AI",
          desc:"全设备同步办公、团队协作。丰富模板和高效的同步功能。"
        },
        {
          url:"https://ai.wps.cn/",
          name:"WPS AI",
          desc:"文档和PPT生成。快速生成高质量PPT，适合办公场景"
        },
        {
          url:"https://www.comfy.org/",
          name:"ComfyUI",
          desc:"生成AI内容（文本、图片、视频等）。多模态输出，适合多场景创作。"
        },
        {
          url:"https://yuanbao.tencent.com/",
          name:"腾讯元宝",
          desc:"自媒体文章辅助创作。提供多样化内容创意。"
        },
        {
          url:"https://www.bitbrowser.cn/",
          name:"比特浏览器",
          desc:"自动化管理、数据采集。适合矩阵化运营管理。"
        },
        {
          url:"https://notebooklm.google.com/",
          name:"NotebookLM",
          desc:"英文资料吸收、知识框架搭建。特点：可分析PDF、网页、视频内容"
        },
        {
          url:"https://www.coze.com/",
          name:"Coze工作流",
          desc:"任务流管理、智能体集成。高效整合，提升工作流效率。"
        },
      ]
    },
    {
      name:"内容创作工具",
      icon:"edit outline",
      list:[
        {
          url:"https://bing.midjourny.cn/",
          name:"Midjourney",
          desc:"画质卓越，适合创意工作者"
        },
        {
          url:"https://gamma.app/",
          name:"Gamma",
          desc:"以人工智能为动力，展现创意的新媒介"
        },
        {
          url:"https://creatibi.cn/",
          name:"CreatiBI",
          desc:"短视频脚本设计、项目标准化流程管理。保障创意下限，实现高效流程管理。"
        },
        {
          url:"https://openai.com/index/sora/",
          name:"Sora",
          desc:"OpenAI 推出的一款先进的 AI 视频生成模型"
        },
        {
          url:"https://runwayml.com/",
          name:"Runway",
          desc:"新一代视频生成模型 Gen3 Alpha，具备稳定的光影效果和高质量视频输出。"
        },
        {
          url:"https://pika.art/",
          name:"Pika",
          desc:"由Pika Labs推出的AI视频生成工具，它能够将文本和图像快速转换为视频内容"
        },
        {
          url:"https://jimeng.jianying.com/",
          name:"即梦AI",
          desc:"图片、视频生成。亮点：效果自然，场景匹配优秀"
        },
        {
          url:"https://klingai.kuaishou.com/",
          name:"可灵AI",
          desc:"视频片头片尾生成。画面质感优异。"
        },
        {
          url:"https://www.recraft.ai/",
          name:"Recraft.AI",
          desc:"图标设计、平面创作。特点：画风灵活，适用于创意设计。"
        },
        {
          url:"https://napkin.ai/",
          name:"NapKin AI",
          desc:"The visual AI for Bussiness storytelling"
        },
        {
          url:"https://xingyuexiezuo.com/",
          name:"星月写作",
          desc:"网络小说创作，优化提示词生态，高效提升写作体验"
        },
        {
          url:"https://www.aippt.cn/",
          name:"AIPPT",
          desc:"PPT模板生成。亮点：模板多样，操作便捷，节省时间。"
        },
        {
          url:"https://flomoapp.com/",
          name:"Flomo",
          desc:"灵感记录、碎片化知识整合。亮点：标签化整理与搜索功能强大。"
        },
        {
          url:"https://www.biji.com/",
          name:"Get笔记",
          desc:"语音记录、笔记整理、AI润色。特点：便于口语化信息的结构化整理。"
        },
      ]
    },
    {
      name:"编程辅助工具",
      icon:"user secret",
      list:[
        {
          url:"https://www.cursor.com/",
          name:"Cursor",
          desc:"开发者首选，可快速实现想法"
        },
        {
          url:"https://codeium.com/",
          name:"Windsurf ",
          desc:"面向未来的 AI编程工具"
        },
        {
          url:"https://codegeex.cn/",
          name:"CodeGeeX ",
          desc:"智谱AI开发的对标copilog的免费AI编程工具"
        },
        {
          url:"https://github.com/cline/cline/",
          name:"Cline",
          desc:"VS Code 的开源 AI 助手，从创意到实现一条龙服务"
        },
        {
          url:"https://github.com/stackblitz-labs/bolt.diy/",
          name:"Bolt.DIY ",
          desc:"Bolt.new 的开源版本，支持多种 AI 模型"
        },
        {
          url:"https://devin.ai/",
          name:"Devin ",
          desc:"为团队设计的 AI 开发助手，全流程管理从写码到跑项目，自主开发能力强，项目管理功能全面，适合复杂任务"
        },
        {
          url:"https://aider.dev/",
          name:"Aider ",
          desc:"命令行界面的 AI 编程助手，支持 Git，多种 AI 模型"
        },
        {
          url:"https://idx.google.com/",
          name:"Google IDX ",
          desc:"完全基于云的 IDE，感觉跟本地开发一样爽"
        },
        {
          url:"https://cloud.tencent.com/product/acc/",
          name:"腾讯云 AI 代码助手",
          desc:"辅助编码工具，基于混元代码大模型，提供技术对话、代码补全、代码诊断和优化等能力"
        },
        {
          url:"https://github.com/features/copilot/",
          name:"GitHub Copilot",
          desc:"分析大量的开源代码库，学习编程模式和代码结构，从而为开发者提供智能的代码补全和生成建议"
        },
        {
          url:"https://www.phind.com/",
          name:"Phind",
          desc:"专为开发者设计的 AI 搜索引擎，利用大型语言模型（LLM）提供精准的技术问题解答和代码示例。它旨在帮助开发者快速解决编程难题，提升工作效率"
        },
        {
          url:"https://ref.1st.name/",
          name:"Quick Reference中文版",
          desc:"技术栈快速参考备忘清单【速查表】"
        },
        {
          url:"https://www.marscode.cn/",
          name:"豆包MarsCode ",
          desc:"豆包旗下的 AI 原生 IDE，支持智能补全、智能预测、智能问答等能力。同时提供云端开发环境，一键开箱即用"
        },
        {
          url:"https://lingma.aliyun.com/",
          name:"通义灵码",
          desc:"基于通义大模型的智能编程辅助工具，针对阿里云的云服务使用场景调优，助力开发者高效、流畅地编码。"
        },
        {
          url:"https://v0.dev/",
          name:"V0 ",
          desc:"在线前端 AI 编辑器，专注现代 Web 开发"
        },
        {
          url:"https://learnxinyminutes.com/zh-cn/",
          name:"Y分钟速成X",
          desc:"体验一场旋风般的语言之旅"
        },
        {
          url:"https://oschina.net/",
          name:"开源中国",
          desc:"程序员集散地"
        },
        {
          url:"https://v2ex.com/",
          name:"V2EX",
          desc:"程序员集散地"
        },
        {
          url:"https://csdn.net/",
          name:"CSDN技术社区",
          desc:"程序员集散地"
        },
        {
          url:"https://github.com/",
          name:"Github",
          desc:"程序员集散地"
        },
      ]
    },
    {
      name:"翻译与搜索工具",
      icon:"handshake",
      list:[
        {
          url:"https://immersivetranslate.com/zh-Hans/",
          name:"沉浸式翻译",
          desc:"实时翻译英文网站、文档对照翻译（支持EPUB/PDF）"
        },
        {
          url:"https://metaso.cn/",
          name:"秘塔AI搜索",
          desc:"搜索深度强，适合研究和创作辅助"
        },
        {
          url:"https://www.perplexity.ai/",
          name:"Perplexity",
          desc:"信息搜集与整合、市场调研。亮点：支持复杂信息的分析和整理。"
        },
        {
          url:"https://www.deepl.com/",
          name:"Deep L",
          desc:"翻译准确性高，优于Google翻译"
        },
      ]
    },
    {
      name:"行业与专业工具",
      icon:"bug",
      list:[
        {
          url:"https://consensus.app/",
          name:"Consensus",
          desc:"为研究者“精准”找答案的省时利器"
        },
        {
          url:"https://scispace.com/",
          name:"SciSpace",
          desc:"全能型科研搜索与分析工具"
        },  
        {
          url:"https://app.txyz.ai/",
          name:"TXYZ.ai",
          desc:"帮助用户快速高效地完成各种研究任务"
        },
        {
          url:"https://elicit.com/",
          name:"Elicit",
          desc:"为科研而生的精确搜索专家"
        },
        {
          url:"https://scite.ai/",
          name:"Scite.ai",
          desc:"智能引文追踪与证据图谱神器"
        },
        {
          url:"https://scite.ai/",
          name:"Storm",
          desc:"斯坦福大学团队研发的新锐研究助手"
        },
      ]
    },
    {
      name:"API接口",
      icon:"bug",
      list:[
        {
          url:"https://www.explinks.com/",
          name:"幂简集成",
          desc:"国内领先的API接口平台。提供了一站式发现和试用国内外API的能力，汇总了大量的真正免费API，网址为https://www.explinks.com/。"
        },
        {
          url:"https://rapidapi.com/hub/",
          name:"RapidAPI‌",
          desc:"一个领先的API平台，为开发者提供便捷的API发现、集成和管理服务。它汇集了数千个来自不同提供商的API，涵盖了广泛的技术和应用领域，也提供了大量的免费API"
        },  
        {
          url:"https://github.com/public-apis/",
          name:"GitHub public-apis",
          desc:"这个GitHub仓库提供了一个精心整理的免费API列表，供软件和网页开发使用"
        },
        {
          url:"https://api.aa1.cn/",
          name:"夏柔API平台‌",
          desc:"提供免费的API调用服务，并定期更新新接口。平台由多家知名服务商提供技术和算力支持，包括腾讯云、字节跳动、阿里云和华为云等"
        },
        {
          url:"https://api.shanhe.kim/",
          name:"山河API‌",
          desc:"提供稳定、快速的免费API数据接口服务，服务器采用国内高防，稳定运行。目前共收录了多个接口，涵盖多个领域"
        },
        {
          url:"https://www.juhe.cn/",
          name:"聚合数据‌（收费）",
          desc:"互联网专业数据科技服务商，提供数据技术服务和数据应用，包括数据查询、信息验证和充值接口等服务"
        },
        {
          url:"http://api.yesapi.cn/",
          name:"果创云-小白接口‌",
          desc:"免费、免开发、直接可用的开放式平台，拥有小白云端接口、小白数据管家等多个产品，致力于为开发者提供技术服务"
        },
        {
          url:"https://www.jisuapi.com/",
          name:"万维易源ShowAPI（收费）",
          desc:"提供统一格式的数据，让开发者可以通过API操纵资源"
        },
        {
          url:"https://www.showapi.com/",
          name:"极速数据‌(收费)",
          desc:"为开发者提供各类生活数据API，便于快速简单的开发APP、软件及其他服务平台"
        },
      ]
    },
  ]
}
const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(renderHTML(renderIndex(),config.selling_ads? renderSeller() :null), init);
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
function getFavicon(url){
  if(url.match(/https{0,1}:\/\//)){
    return "https://icon.1st.name/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=48&url=" + url;
    //return   url+"favicon.ico";
    //return "https://www.google.cn/s2/favicons?sz=64&domain_url=" + url;
  }else{
    return "https://icon.1st.name/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=48&url=" + url.split('//')[1];
    //return "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=48&url=" + url.split('//')[1];
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url.split('//')[1];
    //return url+"favicon.ico";
    //return "https://www.google.cn/s2/favicons?sz=64&domain_url=http://" + url;
  } 
}

/** Render Functions
 *  渲染模块函数
 */

function renderIndex(){
  const footer = el('footer',[],el('div',['class="footer"'],'Powered by' + el('a',['class="ui label"','href="https://github.com/sleepwood/cf-worker-dir"','target="_blank"'],el('i',['class="github icon"'],"") + 'Cf-Worker-Dir') + ' &copy; Base on ' + el('a',['class="ui label"'],el('i',['class="balance scale icon"'],"") + 'MIT License')));
  return renderHeader() + renderMain() + footer;
}

function renderHeader(){
  const item = (template,name) => el('a',['class="item"',`data-url="${template}"`],name);

  var nav = el('div',['class="ui large secondary inverted menu"'],el('div',['class="item"'],el('p',['id="hitokoto"'],'条条大路通罗马')))
  var title = el('h1',['class="ui inverted header"'],el('i',[`class="${config.logo_icon} icon"`],"") + el('div',['class="content"'],config.title + el('div',['class="sub header"'],config.subtitle)));
  var menu = el('div',['id="sengine"','class="ui bottom attached tabular inverted secondary menu"'],el('div',['class="header item"'],'&nbsp;') + config.search_engine.map((link,key) =>{
    if(key == 0){
      return el('a',['class="active item"',`data-url="${link.template}"`],link.name);
    }else{
      return item(link.template,link.name);
    }
  }).join(""))
  var input = el('div',['class="ui left corner labeled right icon fluid large input"'],el('div',['class="ui left corner label"'],el('img',['id="search-fav"','class="left floated avatar ui image"','src="https://metaso.cn/favicon.ico"'],"")) + el('input',['id="searchinput"','type="search"','placeholder="搜索你想要知道的……"','autocomplete="off"'],"") + el('i',['class="inverted circular search link icon"'],""));
  return el('header',[],el('div',['id="head"','class="ui inverted vertical masthead center aligned segment"'],(config.hitokoto ? el('div',['id="nav"','class="ui container"'],nav) : "") + el('div',['id="title"','class="ui text container"'],title + (config.search ? input + menu :"") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>' : ''}`)))
}

function renderMain() {
  var main = config.lists.map((item) => {
    const card = (url,name,desc)=> el('a',['class="card"',`href=${url}`,'target="_blank"'],el('div',['class="content"'],el('img',['class="left floated avatar ui image"',`src=${getFavicon(url)}`],"") + el('div',['class="header"'],name) + el('div',['class="meta"'],desc)));
    const divider = el('h4',['class="ui horizontal divider header"'],el('i',[`class="${item.icon} icon"`],"")+item.name);

    var content = el('div',['class="ui four stackable cards"'],item.list.map((link) =>{
      return card(link.url,link.name,link.desc);
    }).join(""));

    return el('div',['class="ui basic segment"'],divider + content);
  }).join("");
  
  return el('main',[],el('div',['class="ui container"'],main));
}

function renderSeller() {
  const item = (type,content) => el('div',['class="item"'],el('i',[`class="${type} icon"`],"") + el('div',['class="content"'],content));
  var title = el('h1',['class="ui yellow dividing header"'],el('i',['class="gem outline icon"'],"") + el('div',['class="content"'],config.sell_info.domain + ' 正在出售'));
  var action = el('div',['class="actions"'],el('div',['class="ui basic cancel inverted button"'],el('i',['class="reply icon"'],"") + '返回'));

  var contact = config.sell_info.contact.map((list) => {
    return item(list.type,list.content);
  }).join("");
  var column = el('div',['class="column"'],el('h3',['class="ui center aligned icon inverted header"'],el('i',['class="circular envelope open outline grey inverted icon"'],"") + '联系我') + el('div',['class="ui relaxed celled large list"'],contact));
  var price = el('div',['class="column"'],el('div',['class="ui large yellow statistic"'],el('div',['class="value"'],el('i',[`class="${config.sell_info.mon_unit} icon"`],"") + config.sell_info.price)));
  var content = el('div',['class="content"'],el('div',['class="ui basic segment"'],el('div',['class="ui two column stackable center aligned grid"'],el('div',['class="ui inverted vertical divider"'],'感兴趣？') + el('div',['class="middle aligned row"'],price + column))));

  return el('div',['id="seller"','class="ui basic modal"'],title + content + action);
}

function renderHTML(index,seller) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
      <link href="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/sleepwood/cf-worker-dir@0.1.1/style.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.js"></script>
  </head>
  <body>
    ${index}
    ${config.selling_ads ? seller : ''}
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    <script>
      $('#sengine a').on('click', function (e) {
        $('#sengine a.active').toggleClass('active');
        $(e.target).toggleClass('active');
        $('#search-fav').attr('src',$(e.target).data('url').match(`+/https{0,1}:\/\/\S+\//+`)[0] + '/favicon.ico') ;
      });
      $('.search').on('click', function (e) {
          var url = $('#sengine a.active').data('url');
          url = url.replace(`+/\$s/+`,$('#searchinput').val());
          window.open(url);
      });
      /* 鼠标聚焦时，回车事件 */
      $("#searchinput").bind("keypress", function(){
          if (event.keyCode == 13){
          // 触发需要调用的方法
          $(".search").click();
          }
      });
      $('#menubtn').on('click', function (e) {
          $('#seller').modal('show');
      });
    </script>
  </body>

  </html>`
}
