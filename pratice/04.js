// Rút trích ngôn ngữ từ URL
// Viết hàm getLanguageCodeFromURL(url) nhận vào url và trả về chuỗi language code rút trích từ url.

// Trường hợp không có language code thì trả về ngôn ngữ mặc định là en

// Giả sử mình chỉ hỗ trợ một số ngôn ngữ như: ['en', 'vi', 'cn'] (lấy từ hằng số SUPPORTED_LANGUAGE_LIST), nếu phát hiện một ngôn ngữ truyền vào chưa hỗ trợ thì trả về en

// Giả sử domain luôn là domain .com

// Chú ý url có thể có trailing slash (tức có dấu / ở cuối url)

// Ví dụ:

// getLanguageCodeFromURL('https://abc.com') --> 'en'

// getLanguageCodeFromURL('https://ezfrontend.com/en') --> 'en'

// getLanguageCodeFromURL('https://ezfrontend.com/cn') --> 'cn'

// getLanguageCodeFromURL('https://ezfrontend.com/vi/') --> 'vi'

// getLanguageCodeFromURL('https://ezfrontend.com/abc') --> 'en' vì abc là ngôn ngữ không được hỗ trợ

// please use these constants in your code
const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGE_LIST = ['en', 'vi', 'cn'];

function getLanguageCodeFromURL(url) {
  // your code here
     if (!url.includes('.com') || !url ) return DEFAULT_LANGUAGE
  if(url.includes('.com/')) {
    const splitUrl = url.split('.com/')
    const lan = splitUrl[1]
    return SUPPORTED_LANGUAGE_LIST.find ( i => lan.includes(i)  ) || DEFAULT_LANGUAGE
  }
  return DEFAULT_LANGUAGE 
  
}