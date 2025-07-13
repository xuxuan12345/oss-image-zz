// /api/getRandomImages.js
export default async function handler(req, res) {
  try {
    const bucketName = 'my-coze-images1';
    const region = 'oss-cn-hangzhou';
    
    // 定义五个文件夹路径
    const folders = [
      'wuli/',  // 替换为您的实际文件夹路径
      'shuxue/',
      'yingyu/',
      'wuli/',
      'dili/'
    ];

    const imageUrls = folders.map(folder => {
      // 生成1-50的随机数
      const randomNum = Math.floor(Math.random() * 50) + 1;
      // 构造图片路径
      return `https://${bucketName}.${region}.aliyuncs.com/${folder}${randomNum}.png`;
    });

    res.status(200).json({ images: imageUrls });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const config = {
  runtime: 'edge',
};