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

const NewsComponent = ({ title, category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles([]);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${category}&apiKey=c9e6de4127a040c59d479b3be8928869`
        );
        setArticles(response.data.articles);
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
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <Card key={index} className="w-1/2 lg:w-1/4 mb-6">
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
                  <Button color="blue">Save</Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
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
