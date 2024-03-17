import { createEffect, sample } from "effector";
import { $error } from "../atoms/error";
import { $redirect } from "../atoms/redirect";
import { loadingApi } from "../atoms/loading";
import { waitALittle } from "../devices/api";

export const imitateAsyncFx = createEffect(waitALittle);

$error.on(imitateAsyncFx.failData, (_, error) => error.message);
$redirect.on(imitateAsyncFx.done, () => '/success');
$redirect.on(imitateAsyncFx.fail, () => '/error');

sample({
  clock: imitateAsyncFx,
  target: loadingApi.start,
});
sample({
  clock: imitateAsyncFx.finally,
  target: loadingApi.stop,
});
