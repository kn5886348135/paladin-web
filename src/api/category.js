import service from "../utils/request";

export function GetCategoryTree() {
  console.log("start to get");
  console.log(`${process.env.VUE_APP_API}/product/category/tree`);
  return service.request({
    method: "get",
    // url: `${process.env.VUE_APP_API}/product/category/tree`,
    url: `/product/category/tree`,
  });
}

export function Test(params) {
  console.log(params);
  return service.request({
    method: "get",
    url: `${process.env.VUE_APP_API}/account/testsss`,
    params,
  });
}
