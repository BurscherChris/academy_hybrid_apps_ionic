package academny.test.plugin;

import android.util.Log;

public class TestPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
