/*
 * @Author: heyong
 * @Date: 2024-03-29 17:41:47
 * @LastEditors: heyong
 * @LastEditTime: 2024-03-29 17:43:09
 */
// 缩放当前页面方法

export const handleScreenAuto = () => {
  const designDraftWidth = 5760; //设计稿的宽度
  const designDraftHeight = 1620; //设计稿的高度
  //根据屏幕的变化适配的比例
  //计算比例：根据用户屏幕尺寸与设计草图尺寸的比值计算 scale 变量。它比较屏幕的纵横比和设计草稿，以确定适当的比例因子。
  // 如果屏幕的纵横比小于设计草图的纵横比，则根据宽度进行缩放;否则，它会根据高度进行缩放。
  const scale =
    document.documentElement.clientWidth /
      document.documentElement.clientHeight <
      designDraftWidth / designDraftHeight
      ? document.documentElement.clientWidth / designDraftWidth
      : document.documentElement.clientHeight / designDraftHeight;
  //缩放比例
  document.querySelector(
    'body'
  ).style.transform = `scale(${scale}) translate(-50%, -50%)`;
};

// 获取当前页面的缩放比例
export const getScreenAuto = () => {
  const designDraftWidth = 5760; //设计稿的宽度
  const designDraftHeight = 1620; //设计稿的高度
  //根据屏幕的变化适配的比例
  const scale =
    document.documentElement.clientWidth /
      document.documentElement.clientHeight <
      designDraftWidth / designDraftHeight
      ? document.documentElement.clientWidth / designDraftWidth
      : document.documentElement.clientHeight / designDraftHeight;

  return scale;
};
