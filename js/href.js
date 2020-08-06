function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
    );

}
// function setLanguageEN(){
//     document.cookie="googtrans=/auto/en"//设置当前语言，这里的语言缩写你看下cookie，我不确定
//     }
// function setLanguageCN(){
//     document.cookie="googtrans=/auto/zh-CN"//设置当前语言，这里的语言缩写你看下cookie，我不确定
// }
// function setLanguageTW(){
//     document.cookie="googtrans=/auto/zh-TW"//设置当前语言，这里的语言缩写你看下cookie，我不确定
//     }