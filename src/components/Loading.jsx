import { Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";

export default function Loading() {
    return (
        <Card className="w-1/2 lg:w-1/4 mb-6 animate-pulse">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                <div className="bg-gray-500 w-72 h-6"></div>
              </Typography>
              <Typography>
              <div className="bg-gray-500 w-64 h-3 mt-5"></div>
              <div className="bg-gray-500 w-36 h-3 mt-5"></div>
              <div className="bg-gray-500 w-48 h-3 mt-5"></div>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className="mr-2 mb-1 md:mb-0 sm:mb-0 bg-gray-500"></Button>
              <Button color="blue" className="bg-gray-500"></Button>
            </CardFooter>
          </Card>
    )
}