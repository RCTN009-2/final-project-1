import { Navbar, Typography, Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";

export function NavbarDark() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  console.log(search);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search/${search}`);
    }
  };

  return (
    <div className="mx-auto flex justify-between items-center w-full  py-3 px-4 z-10 fixed bg-blue-gray-900">
      {/* <Navbar
        variant="gradient"
        color="blue-gray"
        // className="mx-auto flex justify-between items-center w-full from-blue-gray-900 to-blue-gray-800 py-3 px-4 z-10 fixed"
      > */}

      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white w-full">
        <div className="flex items-center">
          <Link to={"/"}>
            <Typography
              variant="h6"
              className="mr-4 ml-2 cursor-pointer py-1.5"
            >
              Indonesia
            </Typography>
          </Link>
          <Link to={"/programming"}>
            <Typography
              variant="h6"
              className="mr-4 ml-2 cursor-pointer py-1.5"
            >
              Programming
            </Typography>
          </Link>
          <Link to={"/covid19"}>
            <Typography
              variant="h6"
              className="mr-4 ml-2 cursor-pointer py-1.5"
            >
              Covid-19
            </Typography>
          </Link>
          <Link to={"/saved"}>
            <Typography
              variant="h6"
              className="mr-4 ml-2 cursor-pointer py-1.5"
            >
              Saved
            </Typography>
          </Link>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <form onSubmit={handleSearch}>
            <Input
              type="search"
              color="white"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="q"
            />
            <Button
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded"
              type="submit"
            >
              Search
            </Button>
          </form>
        </div>
      </div>
      {/* </Navbar> */}
    </div>
  );
}
