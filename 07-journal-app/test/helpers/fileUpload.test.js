import { fileUpload } from "../../src/helpers/fileUpload";
import { urlPattern } from "../constants";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dvdcmtimn",
  api_secret: "G8fYMu1kLBtCD7iGfvV9gQBQZ60",
  api_key: "354287712871396",
  secure: true,
});

describe("Testing in fileUploads", () => {
  test("should upload the file to cloudinary successfully", async () => {
    const imageUrl =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwPYSwvz1uEEmL69DI2Dsth6N6IbXy1Piwg&s";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);
    expect(url).toEqual(expect.any(String));

    expect(typeof url).toBe("string");
    expect(urlPattern.test(url)).toBe(true);

    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");

    await cloudinary.api.delete_resources([imageId], 
        { type: 'upload', resource_type: 'image' }
    );
  });

  test("should throw an exception with the message 'No se ha enviado algún archivo por subir'", async () => {
    await expect(fileUpload()).rejects.toThrow(
      "No se ha enviado algún archivo por subir"
    );
  });
});
