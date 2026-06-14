// cURL Example
curl -X POST https://cdn.kzshop.my.id/upload \
  -F "file=@/path/to/your/file.jpg"

// JavaScript Fetch Example
const formData = new FormData();
formData.append('file', fileInput.files[0]);

fetch('https://cdn.kzshop.my.id/upload', {
  method: 'POST',
  body: formData
})
.then(res => res.json())
.then(data => {
  if(data.success) {
    console.log('File URL:', data.url);
  }
});

// Response Format
{
  "success": true,
  "url": "https://cdn.kzshop.my.id/storage/image-a1b2c3d4e5f6.jpg",
  "size": "1.23 MB",
  "filename": "image-a1b2c3d4e5f6.jpg",
  "type": "image/jpeg"
}