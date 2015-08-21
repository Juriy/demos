using UnityEngine;
using System.Collections;

public class LevelManager : MonoBehaviour {

	// Use this for initialization
	void Start () {
		print ("Start is called");
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown(KeyCode.UpArrow)) {
			print ("Up Arrow Pressed");
		}
		
		if (Input.GetKeyDown(KeyCode.Return)) {
			print ("You Won!");
		}
	}
}
