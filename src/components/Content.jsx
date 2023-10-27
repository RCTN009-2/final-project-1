import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../redux/FetchAPI";
import { saveNews } from "../redux/Save";

const NewsComponent = ({ title, category }) => {
  const data = useSelector((state) => console.log(state));
  const { article } = useSelector((state) => state.getData);
  const { article: savedArticle } = useSelector((state) => state.saveData);

  const dispatch = useDispatch();

  const handleClick = (data) => {
    try {
      dispatch(saveNews(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getNews(category));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <>
      <div className="w-full bg-gradient-to-b from-blue-gray-900 to-blue-gray-800 pb-16 pt-32 md:pt-24">
        <div className="text-white text-center mb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {title ?? "News"}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {article.length > 0 ? (
            article.map((article, index) => (
              <Card key={index} className="w-1/2 lg:w-1/4 mb-6" >
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {article.title}
                  </Typography>
                  <Typography>{article.description}</Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <a href={article.url} target="_blank">
                    <Button className="mr-2 mb-1 md:mb-0 sm:mb-0 ">
                      Read More
                    </Button>
                  </a>
                  {/*Change the color in button Save and Unsave*/}
                  {/* check if article.title is exist in savedArticle} */}
                  {savedArticle.find(
                      (savedArticle) => savedArticle.title === article.title
                    )
                      ? <Button color="red" onClick={() => handleClick(article)}>Unsave</Button>
                      :   <Button color="blue" onClick={() => handleClick(article)}>Save</Button>}
                </CardFooter>
              </Card>
            ))
          ) : (
            <>
              {Array.from({ length: 9 }).map(() => (
                <Loading />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsComponent;

export function SimpleCard1() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-gray-900 to-blue-gray-800 pb-16 pt-32 md:pt-24">
      <div className="text-white text-center mb-6">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          NEWS
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Card key={index} className="w-1/2 lg:w-1/4 mb-6">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Judul Berita
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className="mr-2 mb-1 md:mb-0 sm:mb-0 ">Read More</Button>
              <Button color="blue">Save</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
