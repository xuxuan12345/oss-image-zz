export default async function handler(req, res) {
  try {
    const bucketName = 'my-coze-images1';
    const region = 'oss-cn-hangzhou';
    
    // 请替换为您的实际文件夹路径
    const folders = [
      'shuxue/', 
      'yuwen/',
      'yingyu/',
      'wuli/',
      'dili/'
    ];

    // 生成随机图片URL
    const imageUrls = folders.map(folder => {
      const randomNum = Math.floor(Math.random() * 50) + 1;
      return `https://${bucketName}.${region}.aliyuncs.com/${folder}${randomNum}.png`;
    });

    return res.status(200).json({ images: imageUrls });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export const config = {
  runtime: 'edge',
};