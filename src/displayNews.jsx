import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const displayNews = ({ data }) => {
  const { newsCategory, newsDescription, newsPreviewImage, newsTitle, _id } =
    data;
  return (
    <Card>
      <CardHeader floated={false}>
        <img src={newsPreviewImage} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {newsTitle}
        </Typography>
        <Typography>{newsDescription.slice(0, 180)}</Typography>
      </CardBody>
      <CardFooter divider className="flex justify-center gap-7 pt-2">
        <Typography variant="small" className="capitalize">
          <span className="font-semibold">Category:</span> {newsCategory}
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default displayNews;
