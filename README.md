# HEEM Portfolio — GitHub Pages Editable Version

النسخة دي مبنية على ملف HEEM الأخير، لكن متقسمة عشان التعديل يبقى سهل من GitHub.

## تعدل إزاي؟
افتح ملف `content.js` وعدّل:

- `brand.photo` لتغيير الصورة
- `projects` لإضافة/تعديل المشاريع
- `videos` لإضافة لينكات فيديوهاتك
- `contact.links` لتعديل روابط التواصل
- `colors` لتعديل الألوان

## تغيير الصورة
حط الصورة الجديدة داخل فولدر `assets`، مثلًا:

`assets/my-new-photo.png`

وبعدين في `content.js` غيّر:

```js
photo: "assets/my-new-photo.png"
```

## نشره على GitHub Pages
1. اعمل Repository جديد.
2. ارفع الملفات كلها.
3. ادخل Settings > Pages.
4. Source: Deploy from a branch.
5. Branch: main / root.
6. Save.

أي تعديل في `content.js` وبعده Commit هيتنشر على الموقع.
