export async function uploadFile(file: FileList | null) {
  const formattedFile = file?.item(0);
  const data = new FormData();
  const url = `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`;
  //@ts-ignore
  await data.append("file", formattedFile);
  await data.append("upload_preset", "ml_default");
  let resp = await fetch(url, {
    method: "POST",
    body: data,
  });
  let json = await resp.json();

  let imageURL = json.url;

  return imageURL;
}
